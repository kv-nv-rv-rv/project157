AFRAME.registerComponent("comics-posters", {
    init: function(){
        this.createPoster()
    },

    createBoundry: function(position, id){
        const entityel = document.createElement("a-entity")
        const boundryel = this.createBoundry(position, item.id)
        const poster = this.createPoster(item)
        boundryel.appendChild(poster)
        const titleel = this.createTitleel(position, item)
        boundryel.appendChild(titleel)
        entityel.setAttribute("id", id)
        entityel.setAttribute("visible", true)
        entityel.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10
        })
        entityel.setAttribute("position", position)
        entityel.setAttribute("material", {
            color: "#0077cc",
            opacity: 1
        })
        entityel.setAttribute("cursor-listener", {})
        return entityel
    },

    createPoster: function(item){
        const entityel = document.createElement("a-entity")
        entityel.setAttribute("visible", true)
        entityel.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        })
        entityel.setAttribute("position", {x: 0, y: 5, z: 0.1})
        entityel.setAttribute("material", {src: item.url})
        return entityel
    },

    createTitleel: function(position, item){
        const entityel = document.createElement("a-entity")
        entityel.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 60,
            color: "#e65100",
            value: item.title
        })
        const elposition = position
        elposition.y = -20
        entityel.setAttribute("position", elposition)
        entityel.setAttribute("visible", true)
        return entityel
    }
})