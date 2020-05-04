var Todo = require('../database/schemas/Todo');
var express = require('express');
var router = express.Router();

router.get('/', async  (req, res, next) => {
    const todos = await Todo.findAll({raw: true});
    res.render('features/todo/index', {
        todos: todos
    })
});

router.get('/:id', async (req, res, next) => {
    const todo = await Todo.findByPk(req.params.id);
    const todos = await Todo.findAll({raw: true});
    res.render('features/todo/index', {
        todoEdit: todo,
        todos: todos
    })
});

router.get('/delete/:id', async (req, res, next) => {
    Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
            res.redirect('/todo')
        }).catch(() => {
        console.log('Não conseguiu apagar a todo')
    })
});

router.post('/update/:id', (req, res, next) => {
    Todo.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/todo')
    }).catch(err => {
        console.log('Ocorreu um erro ao atualizar um todo');
        console.error(err)
    });
});

router.post('/save', (req, res, next) => {
    Todo.create({
        title: req.body.title,
        description: req.body.description
    }).then(() => {
        res.redirect('/todo')
    }).catch((err) => {
        console.error(err)
    });
});

module.exports = router;