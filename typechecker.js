const sentenceTag = document.querySelector(`input[type="text"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const kerningTag = document.querySelector(`input[name="kerning"]`)
const kerningOutput = document.querySelector("span.kerning-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("section.output")
const originalText = outputTag.innerHTML

// when I type in my sentenceTag, update the outputTag accordingly
// if there is no value put in the original text

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.innerHTML = this.value
  } else {
    outputTag.innerHTML = originalText
  }
})

// when I change my typesize slider, update the text to it AND
// change the outputTags font size, line height, letter spacing

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})

fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

kerningTag.addEventListener("input", function () {
  outputTag.style.letterSpacing = this.value
  kerningOutput.innerHTML = this.value
})


// when I change my italic checkbox, update the font style to either
// normal or italic if it's checked or not

italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

// when I change my select for typeface, update the font family
typefaceTag.addEventListener("input", function() {
  outputTag.style.fontFamily = this.value
})


// go through all of my colors tags then…
// when I click on of them, change the background color and
// the text color, and make this tag be selected

colorTags.forEach(tag => {

  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    // reset the classes

    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })

    this.classList.add("selected")
  })

})

