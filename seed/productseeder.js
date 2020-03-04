var mongoose    = require("mongoose");
var Product = require("../models/product");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', false);

var url = process.env.DATABASEURL || "mongodb://localhost/medlife" ;
mongoose.connect("mongodb+srv://shubh:medeasy@cluster0-tikja.mongodb.net/test?retryWrites=true&w=majority");


var products = [
    new Product({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgnFnlm_mQJU16HOxf-W6JKB351U5MMmJcNGQxima_Mp5Y9xIbw&s',
        title:  'Dulcolax',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati a ducimus ex sed necessitatibus!',
        price: '250',
        qty: '5',
        _tags: ['cough','cold']
    }),
    new Product({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTch_xnS2RG8etW6r6vveUYXuJ4xhN9f7ewPmWOtUxolpjGtSrHpw&s',
        title: 'Benadryl',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati a ducimus ex sed necessitatibus!',
        price: '345',
        qty: '5',
        _tags: ['cough']
    }),
    new Product({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x3-4aTyaiQUvRWPtudzSAQi0LRLKE_FtwEQUmHanpxiCxja3&s',
        title: 'Etymology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati a ducimus ex sed necessitatibus!',
        price: '50',
        qty: '5',
        _tags: ['cough','xyz']
    }),
    new Product({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQ-aranOoWPvtujWlETwEU36TO3X5z295yFJcDzKRXk1_HNk-bQ&s',
        title: 'Listerine',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati a ducimus ex sed necessitatibus!',
        price: '600',
        qty: '5',
        _tags: ['xyz']
    }),
    new Product({
        image: 'https://healthwatched.files.wordpress.com/2014/12/veenat400mg.jpg',
        title: 'Veenat 400',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati a ducimus ex sed necessitatibus!',
        price: '400',
        qty: '5',
        _tags: ['cough']
    }),
]

var done=0;
Product.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("Removed products");
    for(var i=0; i<products.length; i++){
        products[i].save(function(err,result){
            done++;
            if(done === products.length){
                exit();
            }
        })
    }
});


function exit(){
    mongoose.disconnect();
}