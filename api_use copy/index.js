const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./db/db.js')
const path = require('path')

app.set('view engine', 'ejs');
app.set("views", path.resolve() + "/views");

app.use(express.static(path.resolve() + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', (req,res) => {
  res.render('index');
})

app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.get("/edit/:id", (req, res) => {
  const ID = req.params.id;
  const query = "select * from Topics where id = ?";
  db.query(query, ID, (err, result) => {
    if (err) {
      res.send(err);
    } else if (result == "") {
      res.send("찾으시는 페이지가 존재하지않습니다.");
    } else res.render("Edit", { id: ID, Data: result[0] });
  });
});

app.get("/create", (req, res) => {
  res.render("Create");
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const query = "delete from Topics where id = ?";
  db.query(query, id, (err, reslut) => {
    err ? console.log(err) : res.redirect("/main");
  });
});

app.post("/edit", (req, res) => {
  const Title = req.body.Title;
  const Article = req.body.Article;
  const ID = req.body.id;
  const query = `
  update Topics set Title = ?, 
  Article = ?, 
  Created = DATE_FORMAT(now(), '%Y-%m-%d') where id = ?
  `;
  db.query(query, [Title, Article, ID], (err, result) => {
    err ? console.log(err) : res.redirect("/main");
  });
});

app.post("/create", (req, res) => {
  const Title = req.body.Title;
  const Article = req.body.Article;
  const query = `
  insert into Topics(Title ,Article,Created)
  values(?,?,DATE_FORMAT(now(), '%Y-%m-%d'))`;
  db.query(query, [Title, Article], (err, result) => {
    err ? res.send(err) : res.redirect("/main");
  });
});

app.get("/main", (req, res) => {
  const query = "SELECT * from Topics";
  db.query(query, (err, result) => {
    err ? res.send(err) : res.render("main", { data: result });
  });
});

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하는 패쓰, 없으면 생성

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
