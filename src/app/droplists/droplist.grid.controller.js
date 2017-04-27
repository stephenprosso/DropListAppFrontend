(function() {
    'use strict';

    angular
        .module('app.droplists')
        .controller('droplistsGridController', droplistsGridController);

        droplistsGridController.$inject = ['droplistsFactory'];

    /* @ngInject */
    function DroplistsGridController(droplistsFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
