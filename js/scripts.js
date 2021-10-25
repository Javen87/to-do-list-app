function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    //Conditional to check for value and add to ordered list  
    if(inputValue === ''){
        alert('Cant be empty!');
    }
    else{
        $('#list').append(li);
        $('#input').val('');
    }

    //Function to strike through text
    function crossOut(){
        li.toggleClass('strike');
    }

    //Add event to list item to strike through whe double clicked
    li.on('dblclick', crossOut);

    //Adding delete button to list items
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);

    //crossOut
    function deleteListItem(){
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);

    $('#list').sortable();
}