import React from 'react';

const Blog = () => {
    return (
        <div className='container py-4'>
            <div>
                <h3>What is the Difference between JavaScript and Nodejs?</h3>
                <p>Ans: Javascript is a Scripting language. it's a high level programming language. Javascript is a programming language that is used for writing scripts on the website and it's only run on browser. It's used on frontend devolopmet. <br />
                Nodejs is used in server-side development. It's written in C, C++ and JavaScript. V8 is the javascvtipt engine inside of node.js that parse and run code.It's mainly used on server side.
                </p>
            </div>
            <div>
                <h3>When should you use nodejs and when should you use mongodb</h3>
                <p>Ans: Nodejs and Mongodb are different technologies.Mongodb is a database system which give to chance to stored document. And to perform operation like data create , read , update and also delete. <br />
                Nodejs is Javascript engine that write any application (by using in the javascript language). It's mainly run on server side that can respond to web request, Overall Mongodb is a database which can used nodejs.
                </p>
            </div>
            <div>
                <h3>Differences between sql and nosql databases.</h3>
                <p>Ans: SQL is relational database mangement system, and Nonsql is non-relational database system. Sql database is fixed and static and predefined schema, and Nosql have dynamic schema. Sql is using vertically scalable and Nonsql is horizontally scalabel. Sql is best for complex queries and nosql is not good for complex queries. </p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>Ans: JSON means Javacript Object Notation and is a text-based format for trasmitting data across web application. Simply token is a string of data htat represents somthing else, such as an identiy. JSON Web Token open standard used to share secu imfomation between client side and server side.</p>
            </div>
        </div>
    );
};

export default Blog;