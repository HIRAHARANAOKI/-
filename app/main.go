package main

import (
	"fmt"
	"math"
)

// 引数は同じ型ならまとめられる
// 複数の返り値も型付ける
func add(x, y string) (string, string) {
	return y, x
}

func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%s >= %g\n", v, lim)
	}
	return lim
}

func main() {
	sum := 1

	// Forループ Whileはない
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	// 省略できる
	for sum < 10 {
		sum += sum
	}
	fmt.Println(sum)

	// 無限ループ
	//for {
	//
	//}

	// 遅らせる
	//defer fmt.Println("delay world")

	//fmt.Println("pow")
	//fmt.Println(
	//	pow(3, 2, 10))

	// Echo
	//e := echo.New()
	//e.GET("/", func(c echo.Context) error {
	//	return c.String(http.StatusOK, "Hello world!")
	//})
	//
	//e.Logger.Fatal(e.Start(":8080"))
}
