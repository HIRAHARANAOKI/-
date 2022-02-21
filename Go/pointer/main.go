package main

import (
	"fmt"
)

type User struct {
	ID int
	Username string
}

func (u *User) setName(id int, username string) {
	u.ID = id
	u.Username = username
	fmt.Printf("%s Username is \n", u.Username)
}

func main() {
	//u := new(User)
	u := User{ID: 2, Username: "Mike"}
	fmt.Println(u)
	u.setName(1, "Hirahara")
	fmt.Println(u)

}