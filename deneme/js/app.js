// ************ writeMessage
new Vue({
        el: '#app',
        data: {
            message: "Hello World!"
        }
    })
    // ************ v-if
new Vue({
    el: '#app2',
    data: {
        message: "Login Successfull.",
        isLogin: false
    },

    methods: {
        changeMessage() {
            this.isLogin = !this.isLogin;
        }
    },
})


// ************ v-for

new Vue({
    el: '#app3',
    data: {
        message: "Login Successfull."
    }
})

// ************ v-html

new Vue({
    el: '#app4',
    data: {
        message: "<h1>Login Successfull.</h1>"
    }
})



// ************ data.sjon

new Vue({

    el: '#app5',
    data: {
        tableData: []
    },
    created() {
        fetch("./json/data.json").then((res) => {
            return res.json()
        }).then((res) => {
            this.tableData = res;
        })
    },
})