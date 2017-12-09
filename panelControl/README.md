# 自定义control

```
实例化control
const c = new PanelControl({
    icon: './.../..png'
})

add click event
c.click = function() {
    //
}
update image
let url = './.../..png';
c.update(url)

```
