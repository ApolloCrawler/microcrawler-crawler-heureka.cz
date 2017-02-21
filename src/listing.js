// Copyright, 2013-2016, by Tomas Korcak. <korczis@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var querystring = require('querystring');
var url = require('url');

var exports = module.exports = function ($) {
    var results = [];

    // $(this).attr('h2')
    $('div#fulltext > div.product').each(function () {
        var doc = $(this);

        results.push({
            type: 'url',
            url: doc.find('a.link').attr('href'),
            processor: 'heureka.cz/details',
            context: JSON.parse(JSON.stringify({
                title: doc.find('h2').text(),
                name: doc.find('a.link').text(),
                description: doc.find('div.desc > p').text(),
                price: parseInt(doc.find('a.pricen').text().replace(' Kč', '').replace(' ', ''), 10),
                url: doc.find('a.link').attr('href')
            }))
        });
    });

    $('p.pag.bot > a').each(function () {
        results.push({
            type: 'url',
            processor: 'heureka.cz/listing',
            url: $(this).attr('href').replace('./', 'https://www.heureka.cz/')
        });
    });

    return results;
};