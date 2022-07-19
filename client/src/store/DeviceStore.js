import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ];
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 2, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 3, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 4, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 5, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 6, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
            {id: 7, name: "Iphone 12 Pro", price: 15000, rating: 5, img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}