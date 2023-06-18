function convert()
{
    let markdown = document.getElementById("markdown_input").value;
    let mdp = makeMDP();
    let output = mdp.render(markdown);
    let output_element = document.getElementById("bahacode_output");
    output_element.textContent = output;
}
function md2bahacode(md)
{
    const regex = /(.+)(?:\n(```[\s\S]+```)\n)?/g;
    let matches;
    const parts = [];

    while((matches = regex.exec(md)) !== null)
    {
        const [, part, codeBlock] = matches;
        if(codeBlock)
        {
            parts.push(`${part.trim()}\n${codeBlock.trim()}`);
        }
        else
        {
            parts.push(part.trim());
        }
    }

    console.log(parts);
}