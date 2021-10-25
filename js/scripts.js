function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    //Conditional to check for value and add to ordered list  
    if(inputValue === ''){
        alert('You must write something!');
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

    //Function to delete list items
    function deleteListItem(){
        li.addClass('delete');
    }

    //Add event to delete list item when 'X' is clicked 
    crossOutButton.on('click', deleteListItem);

    //Method to be able to re-order list items
    $('#list').sortable();
}