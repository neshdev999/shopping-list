//Function to check mark the list item
function checkMarkShopingListItem() {
    $(".shopping-item-controls").unbind("click");
    $('.shopping-item-controls').on('click', 'button.shopping-item-toggle', function(event) {
        $(this).parent().siblings().toggleClass('shopping-item__checked');
    });
}

checkMarkShopingListItem();

// Function to delete the list item
function deleteShopingListItem() {
    // $(".shopping-item-controls").unbind("click");
    $('.shopping-item-controls').on('click', 'button.shopping-item-delete', function(event) {
        $(this).parent().parent().remove();
    });
}

deleteShopingListItem();

function submitShoppingListItemForm() {
    $('#js-shopping-list-form').on('submit', function(event) {

        // stop the default form submission behavior
        event.preventDefault();


        const grabInputItem = $("#shopping-list-entry").val();
        console.log(grabInputItem);
        const outputListItem = $("div").find(".shopping-list");
        outputListItem.append("<li> <span class='shopping-item'> " + grabInputItem + " </span> <div class='shopping-item-controls'><button class='shopping-item-toggle'> <span class='button-label'>check</span></button> <button class='shopping-item-delete'><span class='button-label'>delete</span> </button> </div> </li>");

        // Clear add an item input field text after addition of new item
        clearText('shopping-list-entry');


        // functions call after addition of new item in the list
        checkMarkShopingListItem();
        deleteShopingListItem();
    });
}

submitShoppingListItemForm();

// Function to clear 'add an item input field -text' after addition
function clearText(id) {
    document.getElementById(id).value = '';
}