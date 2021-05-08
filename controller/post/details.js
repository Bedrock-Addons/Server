angular.module('App').controller('PostDetailsController',
    function ($scope, $rootScope, $location, $mdToast, services, db) {

        var self            = $scope;
        var root            = $rootScope;

        self.product        = {};
        self.getPrice       = root.getPrice;
        self.openCart       = root.openShoppingCartList;
        self.loading        = true;
        self.pagetitle      = self.product.name;
        self.wish_list      = false;
        self.on_cart        = false;
        self.bt_cart_txt    = "ADD TO CART";
        self.cart_color     = "#FFDE26";
        self.images         = [];
        self.images_idx     = 0;
        self.selected_image = null;
	self.categories = [];

        if($location.search().id) {
            self.product.id = $location.search().id;
            services.getProductDetails(self.product.id).then(function (data) {
                self.product = data.product;
                self.loading = false;
                self.selected_image = self.product.image;
                self.images.push(self.product.image);
                for (var i = 0; i < self.product.product_images.length; i++){
                    self.images.push(self.product.product_images[i].name);
                }
            });
        } else {
            root.openHome();
            return;
        }

        db.open().then(function () {
            db.getOneWishList(self.product.id).then(function (result) {
                self.wish_list = true;
            }, function (err) {
            });

            db.getOneCart(self.product.id).then(function (result) {
                self.on_cart = true;
                refreshBtCart();
            }, function (err) {
            });
        });

        self.back = function () {
            root.actionBack();
        };

        root.productImageURL().then(function (url) {
            self.img_prod_path = url;
        });

        root.getInfo().then(function (obj) {
            self.info = obj.info;
        });

        self.onWishlistClicked = function (p) {
            if (self.wish_list) {
                deleteWishlist(p);
            } else {
                addToWishlist(p);
            }
        };

        var addToWishlist = function (p) {
            db.saveWishList(p).then(function () {
                self.wish_list = true;
                $mdToast.show($mdToast.simple().content('Add to bookmarks').position('bottom right'));
            }, function (err) {
                alert(err);
            });
        };

        var deleteWishlist = function (p) {
            db.deleteWishList(p.id).then(function () {
                self.wish_list = false;
                $mdToast.show($mdToast.simple().content('Remove from bookmarks').position('bottom right'));
            }, function (err) {
                alert(err);
            });
        };

        self.onCartClicked = function (p) {
            if (self.on_cart) {
                deleteCart(p);
            } else {
                addToCart(p);
            }
        };
        var addToCart = function (p) {
            if (p.stock == 0 || p.status == "OUT OF STOCK") {
                $mdToast.show($mdToast.simple().content('Ops, Product out of stock').position('bottom right'));
                return;
            }
            if (p.status == "SUSPEND") {
                $mdToast.show($mdToast.simple().content('Ops, Product is suspend').position('bottom right'));
                return;
            }
            var selected_price = p.price_discount > 0 ? p.price_discount : p.price;
            p.selected_price = selected_price;
            p.created_at = new Date().getTime();
            p.amount = 1;
            db.saveCart(p).then(function () {
                self.on_cart = true;
                refreshBtCart();
                $mdToast.show($mdToast.simple().content('Add to shopping cart').position('bottom right'));
            }, function (err) {
                alert(err);
            });
        };

        var deleteCart = function (p) {
            db.deleteCart(p.id).then(function () {
                self.on_cart = false;
                refreshBtCart();
                $mdToast.show($mdToast.simple().content('Remove from shopping cart').position('bottom right'));
            }, function (err) {
                alert(err);
            });
        };

	// open category details category
        self.detailsCategory = function (c) {
            root.openCategoryDetails(c);
        };

        var refreshBtCart = function () {
            self.bt_cart_txt = self.on_cart ? "REMOVE FROM CART" : "ADD TO CART";
            self.cart_color = self.on_cart ? "#666666" : "#FFDE26";
        };

        root.getInfo().then(function (obj) {
            self.info = obj.info;
        });

        self.changeImage = function (type) {
            if (type == 'NEXT') {
                if ((self.images_idx + 1) < self.images.length) {
                    self.images_idx++;
                    self.selected_image = self.images[self.images_idx];
                }
            } else if (type == 'PREV') {
                if ((self.images_idx-1) > -1) {
                    self.images_idx--;
                    self.selected_image = self.images[self.images_idx];
                }
            }
        };

    });
