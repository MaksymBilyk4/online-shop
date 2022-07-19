import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
    const device = {
        id: 1,
        name: "Iphone 12 Pro",
        price: 15000,
        rating: 5,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACCCAMAAABhCFa9AAAAb1BMVEXw6+sAAAD07+/59PTs5+fo4+P/+/v89/fa1tbf2torKipaWFgzMjL///9XVVXj3t4ODg7Bvb3Uz8+Gg4O0sLDJxMR+e3tycHAZGRlRT0+joKA/PT2sqKgUFBS6trYdHR1oZmaTkJCbmJhIRkYkIyNTjoYeAAABh0lEQVRoge3T246bMBAG4DnY2AFCOMQBlnBc3v8Z1ySq1FZVJfaqlf7vAkcKzNgzHiIAAAAAAAAAAAAAgH+A/Gn5+0unwsvtYuJ3YvyxkFxuv0QRY49/rZdjIW9P5zB9WeaVSJ1yWgtJy9zoe6+vWCYdHMlz5N4Q2Z67+9kU0k5hTtWlux9SlTs/Nw5yiwey3hK5heeELC+BH6oth4XPnoFUdCjU8Jp88MW1rBoP4blNMrYkU5l1iUwcrhkn0i3XwNXZQ5g8H6x4fuqdg+tzTXhxuvHKRz24XsZEjtwPFuHGef443YmtSVv9LQPpwFl8LplmnfzIQN/KIOquj1hbXq/bK47GnapY5pSO58icJ1WsUhGrtGfnqyShqe5jKa4vqz12OvDWxE5rwTW3SqH2fenj5ovp6HTDU3G201IP81zUcSr68TPeVl33fVWp9qfb4u0Vce1nQlLlcxZvq1m6fDp9W8Xa1zCJfQ+BeQ1e/P1zJKH3pIk135hqAAAAAAAAAAAAAID/zxeabBKuTe/n3QAAAABJRU5ErkJggg=="
    };

    const description = [
        {id: 1, title: "Оперативная память", description: "5гб"},
        {id: 2, title: "Камера", description: "12 мп"},
        {id: 3, title: "Процессор", description: "2"},
        {id: 4, title: "Аккумулятор", description: "4000"}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                fontSize: 65,
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover"
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                          style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}>
                        <h3>От {device.price} грн. </h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;