Bill.Item = function(bill) {
    this.bill = bill;
};

Bill.Item.prototype.appendJQ = function() {
    var jq = $("<div></div>");
    this.jq = jq;
    jq.attr({
        "data-name": this.name,
        "data-price": this.price
    });
    jq.text(this.person.name + " owes " + formatCurrency(this.price) + " for the " + this.name);
    jq.addClass("billItem");
    jq.append(
        $("<button></button>")
            .text("Delete")
            .addClass("btn btn-danger delete-button")
            .click(function() {
                this.bill.deleteItem(this);
            }.bind(this))
    );
    $("#billItems").append(jq);
};

Bill.Item.prototype.removeJQ = function() {
    this.jq.remove();
};
