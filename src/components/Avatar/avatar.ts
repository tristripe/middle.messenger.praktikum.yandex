import {Block} from "../../core";

interface AvatarProps {
  events?: {
    click?: () => void;
  },
  className?: string,
  avatarImage?: string,
  dateNumber?: string,
  previewMessage?: string,
  startMessage?: string,
  name: string,
  avatarClose?: boolean
}

export class Avatar extends Block {
  constructor({className, avatarImage, avatarClose, dateNumber, previewMessage, startMessage, name}: AvatarProps) {
    super({className, avatarImage, avatarClose, dateNumber, previewMessage, startMessage, name});
  }

  protected render() {
    // language=hbs
    return `
        <article class="avatar {{className}}">
            {{#if avatarClose}}
                {{{Button className="avatar__close" text="╳"}}}
            {{/if}}
            <div class="avatar__image">
                {{#if avatarImage}}
                    <img src="{{avatarImage}}" alt="Изображение">
                {{else}}
                    <span class="avatar__template""></span>
                {{/if}}
            </div>
            <div class="avatar__header">
                <p class="avatar__name">
                    {{#if name}}
                        {{name}}
                    {{else}}
                        Вася
                    {{/if}}
                </p>
                {{#if dateNumber}}
                    <p class="avatar__date">{{dateNumber}}</p>
                {{/if}}
                {{#if previewMessage}}
                    <p class="avatar__preview-message">{{previewMessage}}</p>
                {{/if}}
                {{#if startMessage}}
                    <p class="avatar__start-message">{{startMessage}}</p>
                {{/if}}
            </div>
        </article>
    `
  }
}
