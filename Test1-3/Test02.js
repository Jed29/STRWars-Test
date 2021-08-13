function coolTriangle(n) {
	for(let i = 0; i < n; i++) {
		for(let j = 0; j <= i; j++) {
			if( i == n-1) {
				process.stdout.write("*")
			} else if (j == 0 || j == i) {
				process.stdout.write("*")
			} else {
				process.stdout.write(" ")
			}
		}
		console.log("")
	}
}
console.log(coolTriangle(8))
console.log(coolTriangle(7))
console.log(coolTriangle(3))