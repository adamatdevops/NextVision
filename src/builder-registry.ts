import { Builder } from "@builder.io/react";
import { Button } from "../node_modules/@aws-amplify/ui-react/dist/types/primitives/Button/index.d";
import { CheckboxField } from "../node_modules/@aws-amplify/ui-react/dist/types/primitives/CheckboxField/index.d";
import Counter from "./components/Counter/Counter";
import Error404 from "./pages/errors/Error404";
import { Icon } from "../node_modules/@aws-amplify/ui-react/dist/types/primitives/Icon/index.d";
import { Image } from "../node_modules/@aws-amplify/ui-react/dist/types/primitives/Image/index.d";
import Root from "./routes/routes";

Builder.registerComponent(Counter, {
	name: "Counter",
	inputs: [
		{
			name: "initialCount",
			type: "number",
		},
	],
});

Builder.registerComponent(Button, {
	name: "Button",
	inputs: [
		{
			name: "alignContent",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "alignItems",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "alignSelf",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "area",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "as",
			type: "string",
			meta: {
				ts: "Element",
			},
		},
		{
			name: "backgroundColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "backgroundImage",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "basis",
			type: "string",
			enum: [
				"-moz-fit-content",
				"-moz-initial",
				"-moz-max-content",
				"-moz-min-content",
				"-webkit-auto",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "border",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderRadius",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<RadiiKeys<StyleToken<BorderRadius<0 | (string & {})>>>>",
			},
		},
		{
			name: "borderStyle",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderWidth",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "bottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Bottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "boxShadow",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<BoxShadowKeys<StyleToken<BoxShadow>>>",
			},
		},
		{
			name: "children",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
		},
		{
			name: "className",
			type: "string",
		},
		{
			name: "color",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "colorTheme",
			type: "string",
			enum: ["error", "info", "overlay", "success", "warning"],
		},
		{
			name: "column",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnGap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<GridColumnGap<0 | (string & {})>>>>",
			},
		},
		{
			name: "columnSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "columnStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "direction",
			type: "string",
			enum: [
				"-moz-initial",
				"column",
				"column-reverse",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"row",
				"row-reverse",
				"unset",
			],
		},
		{
			name: "display",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "flex",
			type: "string",
			enum: [
				"-moz-initial",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontFamily",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontSize",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontStyle",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"italic",
				"normal",
				"oblique",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontWeight",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "gap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Gap<0 | (string & {})>>>>",
			},
		},
		{
			name: "grow",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "height",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Height<0 | (string & {})>>>>",
			},
		},
		{
			name: "id",
			type: "string",
		},
		{
			name: "inert",
			type: "boolean",
		},
		{
			name: "isDisabled",
			type: "boolean",
		},
		{
			name: "isFullWidth",
			type: "boolean",
		},
		{
			name: "isLoading",
			type: "boolean",
		},
		{
			name: "justifyContent",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "left",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Left<0 | (string & {})>>>>",
			},
		},
		{
			name: "letterSpacing",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<LetterSpacing<0 | (string & {})>>>>",
			},
		},
		{
			name: "lineHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<LineHeightKeys<StyleToken<LineHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "loadingText",
			type: "string",
		},
		{
			name: "margin",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Margin<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "minHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "minWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "opacity",
			type: "string",
			enum: [
				"-moz-initial",
				"0",
				"10",
				"100",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "order",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "overflow",
			type: "string",
			enum: [
				"-moz-hidden-unscrollable",
				"-moz-initial",
				"auto",
				"clip",
				"hidden",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"scroll",
				"unset",
				"visible",
			],
		},
		{
			name: "padding",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Padding<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "position",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-sticky",
				"absolute",
				"fixed",
				"inherit",
				"initial",
				"relative",
				"revert",
				"revert-layer",
				"static",
				"sticky",
				"unset",
			],
		},
		{
			name: "right",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Right<0 | (string & {})>>>>",
			},
		},
		{
			name: "row",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowGap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<RowGap<0 | (string & {})>>>>",
			},
		},
		{
			name: "rowSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "rowStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "shrink",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "size",
			type: "string",
			enum: ["large", "small"],
		},
		{
			name: "style",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "CSSProperties",
			},
		},
		{
			name: "testId",
			type: "string",
		},
		{
			name: "textAlign",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-match-parent",
				"center",
				"end",
				"inherit",
				"initial",
				"justify",
				"left",
				"match-parent",
				"revert",
				"revert-layer",
				"right",
				"start",
				"unset",
			],
		},
		{
			name: "textDecoration",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "textTransform",
			type: "string",
			enum: [
				"-moz-initial",
				"capitalize",
				"full-size-kana",
				"full-width",
				"inherit",
				"initial",
				"lowercase",
				"none",
				"revert",
				"revert-layer",
				"unset",
				"uppercase",
			],
		},
		{
			name: "top",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Top<0 | (string & {})>>>>",
			},
		},
		{
			name: "transform",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"slideX.large",
				"slideX.medium",
				"slideX.small",
				"unset",
			],
		},
		{
			name: "transformOrigin",
			type: "string",
			enum: [
				"-moz-initial",
				"bottom",
				"center",
				"inherit",
				"initial",
				"left",
				"revert",
				"revert-layer",
				"right",
				"top",
				"unset",
			],
		},
		{
			name: "type",
			type: "string",
			enum: ["button", "reset", "submit"],
		},
		{
			name: "variation",
			type: "string",
			enum: ["destructive", "link", "menu", "primary", "warning"],
		},
		{
			name: "whiteSpace",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<StyleToken<WhiteSpace>>",
			},
		},
		{
			name: "width",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Width<0 | (string & {})>>>>",
			},
		},
		{
			name: "wrap",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"nowrap",
				"revert",
				"revert-layer",
				"unset",
				"wrap",
				"wrap-reverse",
			],
		},
	],
});

Builder.registerComponent(Image, {
	name: "Image",
	inputs: [
		{
			name: "alignSelf",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "alt",
			type: "string",
			meta: {
				ts: "React.ImgHTMLAttributes<HTMLImageElement>",
			},
			required: true,
		},
		{
			name: "area",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "as",
			type: "string",
			meta: {
				ts: "Element",
			},
		},
		{
			name: "aspectRatio",
			type: "string",
			enum: [
				"-moz-initial",
				"auto",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "backgroundColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "backgroundImage",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "basis",
			type: "string",
			enum: [
				"-moz-fit-content",
				"-moz-initial",
				"-moz-max-content",
				"-moz-min-content",
				"-webkit-auto",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "border",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderRadius",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<RadiiKeys<StyleToken<BorderRadius<0 | (string & {})>>>>",
			},
		},
		{
			name: "borderStyle",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderWidth",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "bottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Bottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "boxShadow",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<BoxShadowKeys<StyleToken<BoxShadow>>>",
			},
		},
		{
			name: "children",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
		},
		{
			name: "className",
			type: "string",
		},
		{
			name: "color",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "column",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "columnStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "display",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "flex",
			type: "string",
			enum: [
				"-moz-initial",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontFamily",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontSize",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontStyle",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"italic",
				"normal",
				"oblique",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontWeight",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "grow",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "height",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Height<0 | (string & {})>>>>",
			},
		},
		{
			name: "id",
			type: "string",
		},
		{
			name: "inert",
			type: "boolean",
		},
		{
			name: "isDisabled",
			type: "boolean",
		},
		{
			name: "left",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Left<0 | (string & {})>>>>",
			},
		},
		{
			name: "letterSpacing",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<LetterSpacing<0 | (string & {})>>>>",
			},
		},
		{
			name: "lineHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<LineHeightKeys<StyleToken<LineHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "margin",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Margin<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "minHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "minWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "objectFit",
			type: "string",
			enum: [
				"-moz-initial",
				"contain",
				"cover",
				"fill",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"scale-down",
				"unset",
			],
		},
		{
			name: "objectPosition",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "opacity",
			type: "string",
			enum: [
				"-moz-initial",
				"0",
				"10",
				"100",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "order",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "overflow",
			type: "string",
			enum: [
				"-moz-hidden-unscrollable",
				"-moz-initial",
				"auto",
				"clip",
				"hidden",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"scroll",
				"unset",
				"visible",
			],
		},
		{
			name: "padding",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Padding<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "position",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-sticky",
				"absolute",
				"fixed",
				"inherit",
				"initial",
				"relative",
				"revert",
				"revert-layer",
				"static",
				"sticky",
				"unset",
			],
		},
		{
			name: "right",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Right<0 | (string & {})>>>>",
			},
		},
		{
			name: "row",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "rowStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "shrink",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "sizes",
			type: "string",
			meta: {
				ts: "React.ImgHTMLAttributes<HTMLImageElement>",
			},
		},
		{
			name: "src",
			type: "string",
			meta: {
				ts: "React.ImgHTMLAttributes<HTMLImageElement>",
			},
			required: true,
		},
		{
			name: "srcSet",
			type: "string",
			meta: {
				ts: "React.ImgHTMLAttributes<HTMLImageElement>",
			},
		},
		{
			name: "style",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "CSSProperties",
			},
		},
		{
			name: "testId",
			type: "string",
		},
		{
			name: "textAlign",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-match-parent",
				"center",
				"end",
				"inherit",
				"initial",
				"justify",
				"left",
				"match-parent",
				"revert",
				"revert-layer",
				"right",
				"start",
				"unset",
			],
		},
		{
			name: "textDecoration",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "textTransform",
			type: "string",
			enum: [
				"-moz-initial",
				"capitalize",
				"full-size-kana",
				"full-width",
				"inherit",
				"initial",
				"lowercase",
				"none",
				"revert",
				"revert-layer",
				"unset",
				"uppercase",
			],
		},
		{
			name: "top",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Top<0 | (string & {})>>>>",
			},
		},
		{
			name: "transform",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"slideX.large",
				"slideX.medium",
				"slideX.small",
				"unset",
			],
		},
		{
			name: "transformOrigin",
			type: "string",
			enum: [
				"-moz-initial",
				"bottom",
				"center",
				"inherit",
				"initial",
				"left",
				"revert",
				"revert-layer",
				"right",
				"top",
				"unset",
			],
		},
		{
			name: "whiteSpace",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<StyleToken<WhiteSpace>>",
			},
		},
		{
			name: "width",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Width<0 | (string & {})>>>>",
			},
		},
	],
});

Builder.registerComponent(CheckboxField, {
	name: "CheckboxField",
	inputs: [
		{
			name: "alignContent",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "alignItems",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "alignSelf",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "area",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "as",
			type: "string",
			meta: {
				ts: "Element",
			},
		},
		{
			name: "autoComplete",
			type: "string",
		},
		{
			name: "backgroundColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "backgroundImage",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "basis",
			type: "string",
			enum: [
				"-moz-fit-content",
				"-moz-initial",
				"-moz-max-content",
				"-moz-min-content",
				"-webkit-auto",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "border",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderRadius",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<RadiiKeys<StyleToken<BorderRadius<0 | (string & {})>>>>",
			},
		},
		{
			name: "borderStyle",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderWidth",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "bottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Bottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "boxShadow",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<BoxShadowKeys<StyleToken<BoxShadow>>>",
			},
		},
		{
			name: "checked",
			type: "boolean",
		},
		{
			name: "children",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
		},
		{
			name: "className",
			type: "string",
		},
		{
			name: "color",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "column",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnGap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<GridColumnGap<0 | (string & {})>>>>",
			},
		},
		{
			name: "columnSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "columnStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "descriptiveText",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
		},
		{
			name: "direction",
			type: "string",
			enum: [
				"-moz-initial",
				"column",
				"column-reverse",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"row",
				"row-reverse",
				"unset",
			],
		},
		{
			name: "display",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "errorMessage",
			type: "string",
		},
		{
			name: "flex",
			type: "string",
			enum: [
				"-moz-initial",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontFamily",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontSize",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontStyle",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"italic",
				"normal",
				"oblique",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontWeight",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "gap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Gap<0 | (string & {})>>>>",
			},
		},
		{
			name: "grow",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "hasError",
			type: "boolean",
		},
		{
			name: "height",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Height<0 | (string & {})>>>>",
			},
		},
		{
			name: "id",
			type: "string",
		},
		{
			name: "inert",
			type: "boolean",
		},
		{
			name: "inputStyles",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "BaseStyleProps",
			},
		},
		{
			name: "isDisabled",
			type: "boolean",
		},
		{
			name: "isIndeterminate",
			type: "boolean",
		},
		{
			name: "isReadOnly",
			type: "boolean",
		},
		{
			name: "isRequired",
			type: "boolean",
		},
		{
			name: "justifyContent",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "label",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
			required: true,
		},
		{
			name: "labelHidden",
			type: "boolean",
		},
		{
			name: "labelPosition",
			type: "string",
			enum: ["bottom", "end", "start", "top"],
		},
		{
			name: "left",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Left<0 | (string & {})>>>>",
			},
		},
		{
			name: "letterSpacing",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<LetterSpacing<0 | (string & {})>>>>",
			},
		},
		{
			name: "lineHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<LineHeightKeys<StyleToken<LineHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "margin",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Margin<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "minHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "minWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "name",
			type: "string",
			required: true,
		},
		{
			name: "opacity",
			type: "string",
			enum: [
				"-moz-initial",
				"0",
				"10",
				"100",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "order",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "overflow",
			type: "string",
			enum: [
				"-moz-hidden-unscrollable",
				"-moz-initial",
				"auto",
				"clip",
				"hidden",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"scroll",
				"unset",
				"visible",
			],
		},
		{
			name: "padding",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Padding<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "placeholder",
			type: "string",
		},
		{
			name: "position",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-sticky",
				"absolute",
				"fixed",
				"inherit",
				"initial",
				"relative",
				"revert",
				"revert-layer",
				"static",
				"sticky",
				"unset",
			],
		},
		{
			name: "right",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Right<0 | (string & {})>>>>",
			},
		},
		{
			name: "row",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowGap",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<RowGap<0 | (string & {})>>>>",
			},
		},
		{
			name: "rowSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "rowStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "shrink",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "size",
			type: "string",
			enum: ["large", "small"],
		},
		{
			name: "style",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "CSSProperties",
			},
		},
		{
			name: "testId",
			type: "string",
		},
		{
			name: "textAlign",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-match-parent",
				"center",
				"end",
				"inherit",
				"initial",
				"justify",
				"left",
				"match-parent",
				"revert",
				"revert-layer",
				"right",
				"start",
				"unset",
			],
		},
		{
			name: "textDecoration",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "textTransform",
			type: "string",
			enum: [
				"-moz-initial",
				"capitalize",
				"full-size-kana",
				"full-width",
				"inherit",
				"initial",
				"lowercase",
				"none",
				"revert",
				"revert-layer",
				"unset",
				"uppercase",
			],
		},
		{
			name: "top",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Top<0 | (string & {})>>>>",
			},
		},
		{
			name: "transform",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"slideX.large",
				"slideX.medium",
				"slideX.small",
				"unset",
			],
		},
		{
			name: "transformOrigin",
			type: "string",
			enum: [
				"-moz-initial",
				"bottom",
				"center",
				"inherit",
				"initial",
				"left",
				"revert",
				"revert-layer",
				"right",
				"top",
				"unset",
			],
		},
		{
			name: "type",
			type: "string",
			meta: {
				ts: "HTMLInputTypeAttribute",
			},
		},
		{
			name: "value",
			type: "string",
		},
		{
			name: "variation",
			type: "string",
			enum: ["quiet"],
		},
		{
			name: "whiteSpace",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<StyleToken<WhiteSpace>>",
			},
		},
		{
			name: "width",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Width<0 | (string & {})>>>>",
			},
		},
		{
			name: "wrap",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"nowrap",
				"revert",
				"revert-layer",
				"unset",
				"wrap",
				"wrap-reverse",
			],
		},
	],
});

Builder.registerComponent(Icon, {
	name: "Icon",
	inputs: [
		{
			name: "alignSelf",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "area",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "as",
			type: "string",
			meta: {
				ts: "Element",
			},
		},
		{
			name: "backgroundColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "backgroundImage",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "basis",
			type: "string",
			enum: [
				"-moz-fit-content",
				"-moz-initial",
				"-moz-max-content",
				"-moz-min-content",
				"-webkit-auto",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "border",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderColor",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderRadius",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<RadiiKeys<StyleToken<BorderRadius<0 | (string & {})>>>>",
			},
		},
		{
			name: "borderStyle",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "borderWidth",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "bottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Bottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "boxShadow",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<BoxShadowKeys<StyleToken<BoxShadow>>>",
			},
		},
		{
			name: "children",
			type: "string",
			hideFromUI: true,
			meta: {
				ts: "ReactNode",
			},
		},
		{
			name: "className",
			type: "string",
		},
		{
			name: "color",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "column",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "columnSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "columnStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "display",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fill",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "flex",
			type: "string",
			enum: [
				"-moz-initial",
				"auto",
				"content",
				"fit-content",
				"inherit",
				"initial",
				"max-content",
				"min-content",
				"none",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontFamily",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontSize",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "fontStyle",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"italic",
				"normal",
				"oblique",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "fontWeight",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "grow",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "height",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Height<0 | (string & {})>>>>",
			},
		},
		{
			name: "id",
			type: "string",
		},
		{
			name: "inert",
			type: "boolean",
		},
		{
			name: "isDisabled",
			type: "boolean",
		},
		{
			name: "left",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Left<0 | (string & {})>>>>",
			},
		},
		{
			name: "letterSpacing",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<LetterSpacing<0 | (string & {})>>>>",
			},
		},
		{
			name: "lineHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<LineHeightKeys<StyleToken<LineHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "margin",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Margin<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "marginTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MarginTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "maxWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MaxWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "minHeight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinHeight<0 | (string & {})>>>>",
			},
		},
		{
			name: "minWidth",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<MinWidth<0 | (string & {})>>>>",
			},
		},
		{
			name: "opacity",
			type: "string",
			enum: [
				"-moz-initial",
				"0",
				"10",
				"100",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "order",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "overflow",
			type: "string",
			enum: [
				"-moz-hidden-unscrollable",
				"-moz-initial",
				"auto",
				"clip",
				"hidden",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"scroll",
				"unset",
				"visible",
			],
		},
		{
			name: "padding",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Padding<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlock",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlock<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBlockStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBlockStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingBottom",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingBottom<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInline",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInline<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineEnd",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineEnd<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingInlineStart",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingInlineStart<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingLeft",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingLeft<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingRight",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingRight<0 | (string & {})>>>>",
			},
		},
		{
			name: "paddingTop",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<PaddingTop<0 | (string & {})>>>>",
			},
		},
		{
			name: "pathData",
			type: "string",
		},
		{
			name: "paths",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "SVGAttributes<SVGPathElement>[]",
			},
		},
		{
			name: "position",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-sticky",
				"absolute",
				"fixed",
				"inherit",
				"initial",
				"relative",
				"revert",
				"revert-layer",
				"static",
				"sticky",
				"unset",
			],
		},
		{
			name: "right",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Right<0 | (string & {})>>>>",
			},
		},
		{
			name: "row",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowEnd",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "rowSpan",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<GridSpanType>",
			},
		},
		{
			name: "rowStart",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "shrink",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"revert",
				"revert-layer",
				"unset",
			],
		},
		{
			name: "style",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "CSSProperties",
			},
		},
		{
			name: "testId",
			type: "string",
		},
		{
			name: "textAlign",
			type: "string",
			enum: [
				"-moz-initial",
				"-webkit-match-parent",
				"center",
				"end",
				"inherit",
				"initial",
				"justify",
				"left",
				"match-parent",
				"revert",
				"revert-layer",
				"right",
				"start",
				"unset",
			],
		},
		{
			name: "textDecoration",
			type: "string",
			meta: {
				ts: "any",
			},
		},
		{
			name: "textTransform",
			type: "string",
			enum: [
				"-moz-initial",
				"capitalize",
				"full-size-kana",
				"full-width",
				"inherit",
				"initial",
				"lowercase",
				"none",
				"revert",
				"revert-layer",
				"unset",
				"uppercase",
			],
		},
		{
			name: "top",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Top<0 | (string & {})>>>>",
			},
		},
		{
			name: "transform",
			type: "string",
			enum: [
				"-moz-initial",
				"inherit",
				"initial",
				"none",
				"revert",
				"revert-layer",
				"slideX.large",
				"slideX.medium",
				"slideX.small",
				"unset",
			],
		},
		{
			name: "transformOrigin",
			type: "string",
			enum: [
				"-moz-initial",
				"bottom",
				"center",
				"inherit",
				"initial",
				"left",
				"revert",
				"revert-layer",
				"right",
				"top",
				"unset",
			],
		},
		{
			name: "viewBox",
			type: "object",
			hideFromUI: true,
			meta: {
				ts: "ViewBox",
			},
		},
		{
			name: "whiteSpace",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<StyleToken<WhiteSpace>>",
			},
		},
		{
			name: "width",
			type: "string",
			meta: {
				ts: "ResponsiveStyle<SpaceKeys<StyleToken<Width<0 | (string & {})>>>>",
			},
		},
	],
});

Builder.registerComponent(Error404, {
	name: "Error404",
});

Builder.registerComponent(Root, {
	name: "Root",
});
