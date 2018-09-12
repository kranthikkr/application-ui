import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
//import { Class } from './class';
//import { ALL_Classes } from './class-data';
import { HttpClient,HttpResponse} from '@angular/common/http';
@Injectable()
export class ClassManagementService { 
    private _classUrl = "http://ide.vivasa.in:34504/api/canvas/classDef";
                
constructor(private http: HttpClient){}
  onFormSubmit(classMngService) {
            return this.http.post<any>(this._classUrl,classMngService);
             
        }

}
    //     getSkills() {
	//     return Observable.of(ALL_SKILLS);		
	// }
	// getAllClasses(): Observable<Class[]> {
	//     return Observable.of(ALL_Classes);
	// }
	// getClassByName(name: string): Observable<Class> {
    //         return this.getAllClasses()
    //          .map(allClasses => allClasses.find(classes => classes.className === name));
    //     }
        // saveClass(classes: Class) {
		// console.log('------------CLASS------------');
		// console.log('Class Name: '+ classes.className);
		// console.log('package Name: '+ classes.packageName);
        // console.log('----- Field Detail -----');
        // for(let field of classes.fields) {
		// console.log('Field Type: '+ classes.field.fieldType);
		// console.log('Field Name: '+ classes.field.fieldName);
        // }
	// 	console.log('----- Method Detail -----');
	// 	for(let method of classes.methods) {
	// 		console.log('methodName: '+ method.methodName);
	// 		console.log('methodReturnType: '+ method.methodReturnType);
	// 	  	console.log('MethodCode: '+ method.methodCode);	
    //           console.log('Visibility: '+ method.visibility);	
    //           console.log('Modifier: '+ method.modifier);	
    //   console.log('----- Import Detail -----');        
//  for(let import of classes.imports) {
// 		console.log('Field Type: '+ classes.import.importedClass);
		
//         }
                        // console.log('-------------------');			
	// 	}
	// }		
//} 