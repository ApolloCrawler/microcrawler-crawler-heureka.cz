// Copyright, 2013-2016, by Tomas Korcak. <korczis@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the %22Software%22), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED %22AS IS%22, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var querystring = require('querystring');
var url = require('url');

var exports = module.exports = function ($) {
    var seed = [
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Apple+iPhone+6+16GB%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Apple+iPhone+7+32GB%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Xiaomi+Redmi+3S+2GB%2F16GB%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Apple+MacBook+Air+MMGF2CZ%2FA%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Asus+VivoBook+E200HA-FD0004TS%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Samsung+UE50KU6072%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22LG+32LH510U%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Alcatel+OneTouch+PIXI+8+WiFi%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Apple+iPad+mini+Retina+Wi-Fi+32GB+ME277SL%2FA%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Huawei+MediaPad+M2+8.0+Wi-Fi+3GB%2F32GB%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22AEG+ProSteam+L7FBE48SC%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22Whirlpool+AWO%2FC+6304%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=%22HUSQVARNA+236%22',
        'https://www.heureka.cz/?h%5Bfraze%5D=DOLMAR+PS+-+5105+C'
    ];

    return seed.map(function(url) {
        return {
            type: 'url',
            url: url,
            processor: 'heureka.cz/listing'
        };
    });
};