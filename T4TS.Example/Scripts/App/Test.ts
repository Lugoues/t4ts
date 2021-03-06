/// <reference path="../../T4TS.d.ts" />
/// <reference path="../lib/jquery-1.8.d.ts" />

module App {
    export class Test {
        
        constructor () {
            // Make an AJAX post and get some data from the server.
            // In the callback, you can specify that the data is of a certain type:
            $.post('./example', {}, (data: Fooz.Foobar) => {
                
                // Intellisense support for the properties:
                alert(data.NestedObjectArr[0].Name);
                alert(data.Recursive.OverrideAll ? "1" : "0");

                // When using lib functions (such as $.each) you need to help
                // by explicitly typing the object in the callback:
                $.each(data.NestedObjectArr, (i, v: T4TS.Barfoo) => {
                    alert(v.DateTime);
                });
            });
        }

    }
}