export class Note {
    constructor(id, name, created_date, content){
        this.id = id
        this.name = name 
        this.created_date = created_date
        this.content = content
    }
    contentPreview(){
        if (this.content.length <= 10){
            return this.content
        }else{
            return this.content.substring(0,11)
        }

    }
}

