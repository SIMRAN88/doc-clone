export const tinyMCEConfigCreate = {
    placeholder: 'Create Document',
    width: 700,
    height: 500,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    target_list: true,
    auto_focus: true,
    paste_data_images: false,
}
// using regex to remove unnecessary formatting
export const pastePreprocess = {
    paste_preprocess: function (plugin, args) {
      args.content = args.content
        .replace(/<img[^>]*>/g, '')
        .replace(/<button[^>]*>/g, '')
        .replace(/<input[^>]*>/g, '')
        .replace(/<fig[^>]*>/g, '')
        .replace(/color:.*?(\"|;)/g, '')
        .replace(/background-color:.*?(\"|;)/g, '')
        .replace(/border-color:.*?(\"|;)/g, '')
        .replace(/font-family:.*?(\"|;)/g, 'font-family: Times New Roman"')
        .replace(/font-size:.*?(\"|;)/g, 'font-size: inherit"')
        .replace(/&nbsp;/g, ' ');
        args.content = args.content.replace(/<[h[1-6](.*?[^?])?>/g, '<p>').replace(/<.[h[1-6](.*?[^?])?>/g, '</p>');

    }
}