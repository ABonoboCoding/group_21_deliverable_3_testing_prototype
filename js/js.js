/* exported Function */
/*switch pages*/
function show__homepage() {
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("materials__recipe3").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("start__recipe3").style.display = "none";
  document.getElementById("homepage__layer").style.display = "block";
}
function show__recipes() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("materials__recipe3").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("start__recipe3").style.display = "none";
  document.getElementById("recipes__layer").style.display = "block";
}
function show__techniques() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("materials__recipe3").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("start__recipe3").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("techniques__layer").style.display = "block";
}
function show__materials1() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "block";
}
function show__start1() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "block";
  document.getElementById('vid_window').style.display = "none";
  document.getElementById('gif_window').style.display = "none";
  document.getElementById('pic_window').style.display = "none";
  document.getElementById('close_all_button').style.display = "none";
}
function show__materials2() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "block";
}
function show__start2() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("start__recipe2").style.display = "block";
  document.getElementById('vid_window').style.display = "none";
  document.getElementById('gif_window').style.display = "none";
  document.getElementById('pic_window').style.display = "none";
  document.getElementById('close_all_button').style.display = "none";
}
function show__start3() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("start__recipe3").style.display = "block";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("materials__recipe3").style.display = "none";
  document.getElementById('vid_window').style.display = "none";
  document.getElementById('gif_window').style.display = "none";
  document.getElementById('pic_window').style.display = "none";
  document.getElementById('close_all_button').style.display = "none";
}
function show__materials3() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("start__recipe2").style.display = "none";
  document.getElementById("start__recipe3").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("materials__recipe2").style.display = "none";
  document.getElementById("materials__recipe3").style.display = "block";
}
function show_techiques_item1() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("techniques_item1").style.display = "block";
  document.getElementById("materials__recipe3").style.display = "none";
}


function pic_layer(){
    document.getElementById('close_all_button').style.display = "block";
    document.getElementById('pic_window').style.display = "block";
    document.getElementById('gif_window').style.display = "none";
    document.getElementById('vid_window').style.display = "none";
  }
function gif_layer(){
    document.getElementById('close_all_button').style.display = "block";
    document.getElementById('gif_window').style.display = "block";
    document.getElementById('pic_window').style.display = "none";
    document.getElementById('vid_window').style.display = "none";
        }
function vid_layer(){
    document.getElementById('close_all_button').style.display = "block";
    document.getElementById('vid_window').style.display = "block";
    document.getElementById('gif_window').style.display = "none";
    document.getElementById('pic_window').style.display = "none";
  }
function close_all(){
    document.getElementById('close_all_button').style.display = "none";
    document.getElementById('vid_window').style.display = "none";
    document.getElementById('gif_window').style.display = "none";
    document.getElementById('pic_window').style.display = "none";
  }


function pic_layer_hot(){
      document.getElementById('close_all_button_hot').style.display = "block";
      document.getElementById('pic_window_hot').style.display = "block";
      document.getElementById('gif_window_hot').style.display = "none";
      document.getElementById('vid_window_hot').style.display = "none";
    }
function gif_layer_hot(){
      document.getElementById('close_all_button_hot').style.display = "block";
      document.getElementById('gif_window_hot').style.display = "block";
      document.getElementById('pic_window_hot').style.display = "none";
      document.getElementById('vid_window_hot').style.display = "none";
          }
function vid_layer_hot(){
      document.getElementById('close_all_button_hot').style.display = "block";
      document.getElementById('vid_window_hot').style.display = "block";
      document.getElementById('gif_window_hot').style.display = "none";
      document.getElementById('pic_window_hot').style.display = "none";
    }
function close_all_hot(){
      document.getElementById('close_all_button_hot').style.display = "none";
      document.getElementById('vid_window_hot').style.display = "none";
      document.getElementById('gif_window_hot').style.display = "none";
      document.getElementById('pic_window_hot').style.display = "none";
    }
