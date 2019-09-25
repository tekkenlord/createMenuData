function createMenuData(data) {
    var title = new Array();
    var unique = new Array();
    var children = new Array();
    
    for (i = 0; i < data.length; i++) {
        var par = [data[i].split("/")];
        var first = par.shift(); //or arr[arr.length-1];
        var last = par.pop(); //or arr[0];
        title.push(first.shift());
    }   
   
    for (i = 0; i < title.length; i++) {
        if(unique.includes(title[i]) != true) {
            unique.push(title[i]);
        }
    }
    document.write(children);
    
    var written = false;
    var objects = [];
    
    for (i = 0; i < unique.length; i++) {
    	for(j = 0; j < data.length; j++){
		    if(data[j].includes(unique[i]) == true && data[j].includes("/")) {
                var par = [data[j].split("/")];
                var first = par.shift(); //or arr[arr.length-1];
                var unique_children = first.pop();
                children.push(unique_children);
                if(!written) {
                    objects[i] = {title: unique[i], data: []};
                    written = true;
                }
                objects[i]["data"].push(unique_children);
    	    }
        }
        written = false;
    }
    
    return objects;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });





















//
