import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      isShowSidenav: false,
      products: [],
      token: null,
      userId: null,
      filter: {
        min: "",
        max: ""
      }
    },
    mutations: {
      showSidenav(state, isShow) {
        state.isShowSidenav = isShow;
      },
      setToken(state, token) {
        state.token = token;
      },
      setUserId(state, id) {
        state.userId = id;
      },
      addProduct(state, product) {
        state.products.push(product);
      },
      editProduct(state, product) {
        const index = state.products.findIndex(item => item.id === product.id);

        if (index != -1) {
          const oldList = [...state.products];
          oldList[index] = product;
          state.products = oldList;
        }
      },
      setProducts(state, products) {
        state.products = products;
      },
      setFilterRange(state, filter) {
        state.filter[filter.type] = filter.value;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        //console.log(context.req);
        if (!context.req.headers.cookie) {
          return;
        }
        let userId = context.req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("userId="));
        if (!userId) {
          return;
        }

        userId = userId.split("=")[1];

        const url = "/products.json"; //?orderBy="userId"&equalTo="' + userId + '"'

        return context.app.$axios
          .$get(url)
          .then(data => {
            const loadedProducts = [];

            for (let id in data) {
              if (data[id].userId == userId)
                loadedProducts.push({
                  ...data[id],
                  id: id
                });
            }
            vuexContext.commit("setProducts", loadedProducts);
          })
          .catch(e => console.log(e));
      },
      addProduct(context, product) {
        let photos = [];

        const saveProduct = () => {
          const createdProduct = {
            ...product,
            userId: context.state.userId,
            updatedDate: new Date(),
            isFavList: false
          };

          this.$axios
            .$post("/products.json?auth=" + context.state.token, createdProduct)
            .then(data => {
              context.commit("addProduct", {
                ...createdProduct,
                id: data.name
              });
              this.$router.push("/sell");
            })
            .catch(e => console.log(e));
        };

        if (product.files && product.files.length) {
          let multiLoadPromisses = [];
          product.files.forEach(item => {
            multiLoadPromisses.push(
              new Promise((resolve, reject) => {
                let storageRef = this.$fire.storage.app.firebase_
                  .storage()
                  .ref("images/" + item.name);
                let uploadTask = storageRef.put(item);
                uploadTask.on(
                  "state_changed",
                  null,
                  error => reject(),
                  () => {
                    uploadTask.snapshot.ref.getDownloadURL().then(url => {
                      resolve(url);
                    });
                  }
                );
              })
            );
          });

          Promise.all(multiLoadPromisses).then(res => {
            photos = res.map(url => {
              return { imgUrl: url };
            });
            delete product.files;
            product.photos = photos;
            saveProduct();
          });
        } else {
          saveProduct();
        }
      },
      setProducts(context) {
        if (context.state.products.length) {
          return;
        }
        this.$axios
          .$get(
            '/products.json?orderBy="userId"&equalTo="' +
              context.state.userId +
              '"'
          )
          .then(data => {
            const loadedProducts = [];
            for (let id in data) {
              loadedProducts.push({
                ...data[id],
                id: id
              });
            }
            context.commit("setProducts", loadedProducts);
          })
          .catch(e => console.log(e));
      },
      updateFavStatus(context, product) {
        const newStatus = !product.isFavList;
        const updatedProduct = {
          ...product,
          isFavList: newStatus
        };
        this.$axios
          .$put(
            "/products/" + product.id + ".json?auth=" + context.state.token,
            updatedProduct
          )
          .then(data => {
            context.commit("editProduct", updatedProduct);
          })
          .catch(e => console.log(e));
      },
      authUser(context, data) {
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
        if (!data.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: data.email,
            password: data.password,
            returnSecureToken: true
          })
          .then(result => {
            context.commit("setToken", result.idToken);
            context.commit("setUserId", result.localId);

            localStorage.setItem("token", result.idToken);
            localStorage.setItem("userId", result.localId);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken);
            Cookie.set("userId", result.localId);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
          })
          .catch(e => console.log(e));
      },
      initAuth(context, req) {
        let token;
        let expirationDate;
        let userId;

        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];

          userId = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("userId="))
            .split("=")[1];
        } else if (process.client) {
          token = localStorage.getItem("token");
          userId = localStorage.getItem("userId");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          context.dispatch("logout");
          return;
        }
        context.commit("setToken", token);
        context.commit("setUserId", userId);
      },
      logout(context) {
        context.commit("setToken", null);
        context.commit("setUserId", null);
        context.commit("setProducts", []);
        Cookie.remove("userId");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      isAuth(state) {
        return state.token != null;
      },
      products(state) {
        return state.products;
      },
      favorites(state) {
        return state.products.filter(item => item.isFavList);
      },
      isShowSidenav(state) {
        return state.isShowSidenav;
      },
      filteredProducts(state) {
        const filter = state.filter;
        const list = state.products.filter(item => {
          if (
            item.price > +filter.min &&
            ((filter.max !== "" && item.price < +filter.max) ||
              filter.max === "")
          ) {
            return item;
          }
        });
        return list;
      }
    }
  });
};

export default createStore;
