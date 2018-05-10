(function () {
    angular
        .module("interview")
        .controller("bookController", bookController);
    var model = this;
    function bookController($scope,  bookService){

        function init() {
            bookService.findAllBooks()
                .then(function (books) {
                    var defData = books;
                    var chart = new tauCharts.Chart({
                        data: defData,
                        type: 'bar',
                        x: 'title',
                        y: 'cost',
                        color:'priority'
                    });
                    chart.renderTo('#bar');

                    //jointJS
                    var graph = new joint.dia.Graph();

                    var paper = new joint.dia.Paper({
                        el: $('#paper'),
                        width: 800,
                        height: 600,
                        gridSize: 1,
                        model: graph
                    });


                    var uml = joint.shapes.uml;

                    var classes = {

                        book: new uml.Class({
                            position: { x:300  , y: 50 },
                            size: { width: 240, height: 100 },
                            name: 'Book',
                            attributes: ['id: String', 'isbn: String', 'title: String'],
                            methods: ['+ setId(id: Numeric): Void','+ setIsbn(isbn: Numeric): Void','+ setTitle(title: String): Void'],
                            attrs: {
                                '.uml-class-name-rect': {
                                    fill: '#feb662',
                                    stroke: '#ffffff',
                                    'stroke-width': 0.5
                                },
                                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                                    fill: '#fdc886',
                                    stroke: '#fff',
                                    'stroke-width': 0.5
                                },
                                '.uml-class-attrs-text': {
                                    ref: '.uml-class-attrs-rect',
                                    'ref-y': 0.5,
                                    'y-alignment': 'middle'
                                },
                                '.uml-class-methods-text': {
                                    ref: '.uml-class-methods-rect',
                                    'ref-y': 0.5,
                                    'y-alignment': 'middle'
                                }

                            }
                        }),

                        author: new uml.Class({
                            position: { x:300  , y: 300 },
                            size: { width: 260, height: 100 },
                            name: 'Author',
                            attributes: ['id: String','name: String'],
                            methods: ['+ setName(first: String, last: String): Void','+ getName(): String'],
                            attrs: {
                                '.uml-class-name-rect': {
                                    fill: '#68ddd5',
                                    stroke: '#ffffff',
                                    'stroke-width': 0.5
                                },
                                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                                    fill: '#9687fe',
                                    stroke: '#fff',
                                    'stroke-width': 0.5
                                },
                                '.uml-class-methods-text, .uml-class-attrs-text': {
                                    fill: '#fff'
                                }
                            }
                        }),

                        publisher: new uml.Class({
                            position: { x:20  , y: 190 },
                            size: { width: 220, height: 100 },
                            name: 'Publisher',
                            attributes: ['id: String','name: String'],
                            methods: ['+ setName(first: String, last: String): Void','+ getName(): String'],
                            attrs: {
                                '.uml-class-name-rect': {
                                    fill: '#ff8450',
                                    stroke: '#fff',
                                    'stroke-width': 0.5,
                                },
                                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                                    fill: '#fe976a',
                                    stroke: '#fff',
                                    'stroke-width': 0.5
                                },
                                '.uml-class-attrs-text': {
                                    ref: '.uml-class-attrs-rect',
                                    'ref-y': 0.5,
                                    'y-alignment': 'middle'
                                },
                                '.uml-class-methods-text': {
                                    ref: '.uml-class-methods-rect',
                                    'ref-y': 0.5,
                                    'y-alignment': 'middle'
                                }
                            }
                        }),


                    };

                    _.each(classes, function(c) { graph.addCell(c); });

                    var relations = [
                        new uml.Composition({ source: { id: classes.book.id }, target: { id: classes.author.id }}),
                        new uml.Composition({ source: { id: classes.book.id }, target: { id: classes.publisher.id }})
                    ];

                    _.each(relations, function(r) { graph.addCell(r); });
                    // model.books = books;
                });


        }init();
    }
})();