(function () {
    var app = angular.module('app.contact-list');

    app.controller('ContactController', function ($scope) {
        var contacts = this;
        this.info = {};
        this.modal = {};

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        } if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;

        contacts.list = [
            {
                created: '11/12/2014',
                name: 'Doris Box',
                email: 'doris.box@dayrep.com'
            },
            {
                created: '11/12/2014',
                name: 'Kevin Emory',
                email: 'kevin.emory@teleworm.us'
            },
            {
                created: '11/18/2014',
                name: 'Cyril Gill',
                email: 'cyril.gill@teleworm.us'
            },
            {
                created: '12/12/2014',
                name: 'Alisa Bodie',
                email: 'alisa.bodie@dayrep.com'
            },
            {
                created: '01/02/2015',
                name: 'Suzanne Ulrich',
                email: 'suzanne.ulrich@jourrapide.com'
            },
            {
                created: '01/12/2015',
                name: 'Stuart Gaither',
                email: 'stuart.gaither@jourrapide.com'
            }
        ];



        this.AddContacts = function (contact) {
            this.info.created = today;
            contact.list.push(this.info);
            this.info = {};

            $scope.NewContacts.$setPristine();
        };

        this.ModalAddContacts = function (contact) {
            this.modal.created = today;
            contact.list.push(this.modal);
            this.modal = {};

            $scope.ModalNewContacts.$setPristine();
        };
    });
})();