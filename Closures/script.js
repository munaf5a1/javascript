function a() {
    var a = 15;
    function b(){
        var b = 17;
        function c() {
            console.log(a);
            console.log(b);
        }
        c();
    }
    b();
}
a();