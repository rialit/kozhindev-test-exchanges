

export const numberSort = (a:number, b:number, isASC:boolean = true):number=>{
    if(a<b){
        return isASC ? -1 : 1
    }
    if(a>b){
        return isASC ? 1 : -1
    }
    return 0
}


export const stringSort = (a:string, b:string, isASC:boolean = true):number=>{
    return isASC ? a.localeCompare(b) : b.localeCompare(a)
}