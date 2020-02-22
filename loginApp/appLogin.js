new Vue({
    el: '#appLogin',
    data: {
        message: "tesfxggt",
        form: {
            email: "",
            password: ""
        },
        isAlert: false,
        dialogVisible: false
    },

    methods: {
        submit() {
            console.log(this.message);
            if (this.form.email == "bagbrc@gmail.com" && this.form.password == "aa") {
                this.dialogVisible = true;
            } else {
                this.isAlert = true;
            }
        }
    },
})