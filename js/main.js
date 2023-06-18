function convert()
{
    let markdown = document.getElementById("markdown_input").value;
    let mdp = makeMDP();
    let output = mdp.convert(markdown);
    let output_element = document.getElementById("bahacode_output");
    output_element.textContent = output;
}
function copy_output()
{
    let output_element = document.getElementById("bahacode_output");
    output_element.select();
    document.execCommand("copy");
}