export const slackStyleType = Object.freeze({
  markDown: 'mrkdwn',
  plainText: 'plain_text',
});

export const slackDivider = Object.freeze({
  type: 'divider',
});

export class SlackSection {
  constructor(text) {
    this.type = 'section';
    this.text = {
      type: slackStyleType.markDown,
      text,
    };
  }

  addImageAccessory(imageUrl, altText) {
    this.accessory = {
      type: 'image',
      image_url: imageUrl,
      alt_text: altText,
    };
  }

  addDateAccessory(initialDate) {
    this.accessory = {
      type: 'datepicker',
      initial_date: initialDate,
      placeholder: {
        type: slackStyleType.plainText,
        text: 'Select a date',
        emoji: true,
      },
    };
  }
}

/**
 * type: section or actions
 * fieldOrElement: fields or elements
 */
export class SlackActionsOrFields {
  constructor(type, fieldOrElement) {
    this.type = type;
    this[fieldOrElement] = [];
  }

  addAction(text, value, style = 'default', type = slackStyleType.plainText, emoji = true) {
    const button = {
      type: 'button',
      text: { type, text, emoji },
      value,
      style,
    };
    this.elements.push(button);
  }

  addField(text, type = slackStyleType.markDown) {
    this.fields.push({ type, text });
  }

  addOptionalProps(blockId) {
    this.block_id = blockId;
  }
}
