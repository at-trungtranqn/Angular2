var $btn = document.getElementById('js-submit');
var $input = document.getElementById('js-name');
var $content = document.getElementById('js-content');
var Member = (function () {
    function Member(name) {
        this.domElement = document.createElement('li');
        this.domElement.className = 'list-group-item';
        this.addDom(name);
        this.addButton();
    }
    Member.prototype.addDom = function (name) {
        var $span = document.createElement('span');
        $span.innerHTML = name;
        this.domElement.appendChild($span);
    };
    Member.prototype.addButton = function () {
        var $delBtn = document.createElement('button');
        $delBtn.className = 'btn btn-danger btn-xs pull-right';
        $delBtn.innerHTML = 'Delete';
        this.domElement.appendChild($delBtn);
        $delBtn.addEventListener('click', function (e) {
            var $parentElement = e.target.parentNode;
            $content.removeChild($parentElement);
        });
    };
    return Member;
}());
$btn.addEventListener('click', function () {
    var name = $input.value;
    var member = new Member(name);
    $content.appendChild(member.domElement);
});
