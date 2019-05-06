const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');
var readline = require('readline-sync');
var express = require("express")
var app = express()
var button = document.getElementsByClassName("testButton");



function testFunction(){
    console.log("yeehaw");
    
}


const fs = require('fs');
const stream = doc.pipe(blobStream());
const doc = new PDFDocument;

var test = "This is a test";

doc.image('test.jpg',0,0,{scale:.39, align:'center',valign:'top'})
//var name = readline.question("What is your name?");

function fillBoxes(){
    doc.fontSize(12);
    doc.text('Blagmother',55,64)//char name
    doc.text('Class',273,52)//char class
    doc.text('Timothy',485,52)//player name
    doc.text('Race',273,79)//char race
    doc.text('Alignment',379,79)//char alignment
    doc.text('EXP',485,79)//char exp
    doc.text('+2',55,130)//char prof
    doc.text('0',61,189)//char str
    doc.text('0',61,258)//char dex
    doc.text('0',61,327)//char con
    doc.text('0',61,396)//char int
    doc.text('0',61,465)//char wis
    doc.text('0',61,534)//char cha
    doc.text('0',61,600)//passive per
    doc.fontSize(8);
    doc.text('0',118,187)//Str Saving throws
    doc.text('0',118,197)//Athletics
    doc.text('0',118,256)//Dex Saving throws
    doc.text('0',118,266)//Acrobatics
    doc.text('0',118,276)//Sleight of Hand
    doc.text('0',118,286)//Stealth
    doc.text('0',118,325)//Con Saving throws
    doc.text('0',118,394)//Int Saving throws
    doc.text('0',118,403)//Arcana
    doc.text('0',118,413)//History
    doc.text('0',118,423)//Investigation
    doc.text('0',118,433)//Nature
    doc.text('0',118,443)//Religion
    doc.text('0',118,463)//Wis Saving throws
    doc.text('0',118,472)//Animal Handling
    doc.text('0',118,481)//Insight
    doc.text('0',118,491)//Medicine
    doc.text('0',118,501)//Perception
    doc.text('0',118,511)//Survival
    doc.text('0',118,531)//Char Saving throws
    doc.text('0',118,541)//Deception
    doc.text('0',118,550)//Intimidation
    doc.text('0',118,560)//Performance
    doc.text('0',118,570)//Persuasion
    doc.fontSize(18);
    doc.text('0',238,140)//Armor Class
    doc.text('0',468,142)//Initiative
    doc.text('30',535,142,{
        width: 550
    }
    );
    doc.fontSize(12);
    doc.text('0',295,143)//Dex Mod
    doc.text('0',337,143)//Armor
    doc.text('0',377,143)//Shield
    doc.text('0',419,143)//Misc
    doc.text('0',330,209)//Max HP
    doc.text('0',263,264)//Hit dice tot
    doc.text('Ski',240,340)//Spell casting
    doc.text('0',300,340)//SpellSave
    doc.text('0',360,340)//Spell Attk Bonus
    doc.text('0',230,)


}

fillBoxes();

doc.rect(0,0,260,50)
   .opacity(40);
doc.fillAndStroke('white')
   
doc.image('logo.png',50,0,{width:170})

doc.end();
stream.on('finish', function() {
  const url = stream.toBlobURL('new2.pdf');
  iframe.src = url;
});


// app.get("/download",function(req,res){
//     res.download("new2.pdf")
// })

// app.listen(8888)
