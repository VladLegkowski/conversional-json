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
              "modalName": "baseModal",
              "text": "Click me to open the modal"
            }
          },
          {
            "type": "BUTTON_COMPONENT",
            "id": "asdwe123das5642",
            "props": {
              "text": "I am normal button"
            }
          },
          {
            "type": "LINK_COMPONENT",
            "id": "sdasidj98394",
            "props": {
              "modalName": "urlModal",
              "url": "https://lmgtfy.com/",
              "text": "I open a link but I should also open the modal."
            }
          },
          {
            "type": "LINK_COMPONENT",
            "id": "weqw131123dasad",
            "props": {
              "url": "https://resume.io/r/xAh364Zkf",
              "text": "I am a normal Link component."
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