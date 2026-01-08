class Text extends Component {
    fillStyle = "magenta"
    text = "[NO TEXT]"
    font = "20px 'Comic Sans MS'"

    textAlign = "left"
    textBaseline = "alphabetic"

    draw(ctx) {
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.textAlign = this.textAlign
        ctx.textBaseline = this.textBaseline

        let lines = ("" + this.text).split("\n")

        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 0, i * 50)
        }

    }
}