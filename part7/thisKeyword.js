const student = {
    name: "prakash",
    math: 23,
    phy: 98, // corrected spelling
    che: 99,
    bio: 89,
    average() {
        let avg = (this.math + this.phy + this.che) / 3;
        console.log(avg);
    }
}
 