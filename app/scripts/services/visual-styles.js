/**
 * Created by kono on 2014/01/24.
 */
angular.module('cyViewerApp')
    .factory('VisualStyles', ['$resource', function ($resource) {

        return $resource('/:filename', {filename: '@filename'});

    }]
    );