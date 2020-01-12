const dataTwo = {
    "type": "BOX_COMPONENT",
    "id": "udaskmci123sdad",
    "props": {
      "borderSize": "2px"
    },
    "children": [
      {
        "type": "BOX_COMPONENT",
        "id": "mjsd7trwqnjd987",
        "props": {
          "borderSize": "1px"
        },
        "children": [
          {
            "type": "BUTTON_COMPONENT",
            "id": "sadasdiqeo1u211",
            "props": {
              "text": "Click me to open the modal"
            }
          },
          {
            "type": "LINK_COMPONENT",
            "id": "sdasidj98394",
            "props": {
              "url": "https://lmgtfy.com/",
              "text": "I open a link but I should also open the modal."
            }
          },
        ],
      },
      {
        "type": "MODAL_COMPONENT",
        "id": "poijkjhkg2123",
        "props": {
          "isOpen": true,
          "width": "500px",
          "height": "400px"
        },
        "children": [
          {
            "type": "H1_COMPONENT",
            "id": "sadqi9eu1390eujhds",
            "props": {
              "text": "How did you like the app?"
            }
          },
          {
            "type": "PARAGRAPH_COMPONENT",
            "id": "123029iejdsaakjdhui",
            "props": {
              "text": "Please leave a review before you go."
            }
          },
        ],
      },
    ],
};

export { dataTwo }