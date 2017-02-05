import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

    transform(data: any[], searchTerm: string): any[] {
        if (searchTerm) {
            searchTerm = searchTerm.toUpperCase();
            return data.filter(item => {
                return item.value.toUpperCase().indexOf(searchTerm) !== -1
            });
    } 
    else {
        return data;
    }

}
}
