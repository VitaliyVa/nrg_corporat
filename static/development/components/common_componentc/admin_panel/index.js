import "./index.scss";

// text edit

$(".admin__panel_button").on("click", function () {
  $(this).toggleClass("admin__panel_button-active");
  $(".admin__panel_wrap").toggleClass("admin__panel_wrap-active");

  if ($(this).hasClass("admin__panel_button-active")) {
    sessionStorage.setItem("admin_panell", 1);
  } else {
    sessionStorage.setItem("admin_panell", 0);
  }
});

$(".admin__panel_show").on("click", function () {
  $(".admin__panel_button").toggleClass("admin__panel_button-active");
  $(".admin__panel_wrap").toggleClass("admin__panel_wrap-active");
});

if (!!sessionStorage.admin_panell && sessionStorage.admin_panell == 1) {
  $(".admin__panel_button").toggleClass("admin__panel_button-active");
  $(".admin__panel_wrap").toggleClass("admin__panel_wrap-active");
}

if (
  !!sessionStorage.admin_panell_edit &&
  sessionStorage.admin_panell_edit == 1
) {
  let control_btn = create__btn();
  addControlBtn(true, control_btn);
  $(".checkbox__db_content").prop("checked", true);
}

$(".checkbox__db_content").on("change", function () {
  event.preventDefault();
  let control_edit, control_btn;

  control_edit = $(this)[0].checked;

  if (control_edit) {
    sessionStorage.setItem("admin_panell_edit", 1);
  } else {
    sessionStorage.setItem("admin_panell_edit", 0);
  }

  control_btn = create__btn();
  addControlBtn(control_edit, control_btn);
});

function addControlBtn(state, btn) {
  if (state) {
    let edit_texts = [...document.getElementsByClassName("db_content")];

    edit_texts.map((item) => {
      item.classList.add("db_content-active");
      const item_href = item.dataset.admin_url;

      $(btn).attr("href", item_href).appendTo(item);
      let btn1 = item.querySelectorAll(".edit_link")[0];

      $(btn1).on("click", function () {
        event.preventDefault();

        window.open(item_href);
      });

      $(item).on("click", function () {
        if ($(item).hasClass("db_content-active")) {
          event.preventDefault();

          window.open(item_href);
        }
      });
    });
  } else {
    let edit_texts = [...document.getElementsByClassName("db_content")];

    edit_texts.map((item) => {
      item.classList.remove("db_content-active");
    });

    $(".edit_link").remove();
  }
}

function create__btn() {
  return `<a href="#" target="_blank" class="edit_link btn">
               <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit"
                 class="svg-inline--fa fa-edit fa-w-18" role="img" viewBox="0 0 576 512">
                 <path fill="currentColor"
                   d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
               </svg>`;
}
