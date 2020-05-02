"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _internal = require("svelte/internal");

var _multiplySvgPoints = _interopRequireDefault(require("./multiply-svg-points"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function create_if_block(ctx) {
  var path;
  var path_style_value;
  var path_d_value;
  return {
    c: function c() {
      path = (0, _internal.svg_element)("path");
      (0, _internal.attr)(path, "style", path_style_value =
      /*color*/
      ctx[1] ? "fill: " +
      /*iconColor*/
      ctx[2] : "");
      (0, _internal.attr)(path, "d", path_d_value =
      /*multiplyPoints*/
      ctx[7]("M28.22461,27.1590817 C34.9209931,27.1590817 40.6829044,21.1791004 40.6829044,13.3926332 C40.6829044,5.69958662 34.8898972,0 28.22461,0 C21.5594557,0 15.7663156,5.82423601 15.7663156,13.4549579 C15.7663156,21.1791004 21.5594557,27.1590817 28.22461,27.1590817 Z M8.66515427,56 L47.7841986,56 C52.6739629,56 54.4181241,54.5984253 54.4181241,51.8576005 C54.4181241,43.8219674 44.358068,32.7341519 28.22461,32.7341519 C12.0600561,32.7341519 2,43.8219674 2,51.8576005 C2,54.5984253 3.74402832,56 8.66515427,56 Z"));
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, path, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*color, iconColor*/
      6 && path_style_value !== (path_style_value =
      /*color*/
      ctx[1] ? "fill: " +
      /*iconColor*/
      ctx[2] : "")) {
        (0, _internal.attr)(path, "style", path_style_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0, _internal.detach)(path);
    }
  };
}

function create_fragment(ctx) {
  var span;
  var svg;
  var rect;
  var rect_style_value;
  var svg_viewBox_value;
  var t;
  var current;
  var if_block =
  /*showIcon*/
  ctx[3] && create_if_block(ctx);
  var default_slot_template =
  /*$$slots*/
  ctx[12]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[11], null);
  var span_levels = [
  /*rest*/
  ctx[5], {
    "class":
    /*skeletonClassName*/
    ctx[6]
  }];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = (0, _internal.assign)(span_data, span_levels[i]);
  }

  return {
    c: function c() {
      span = (0, _internal.element)("span");
      svg = (0, _internal.svg_element)("svg");
      rect = (0, _internal.svg_element)("rect");
      if (if_block) if_block.c();
      t = (0, _internal.space)();
      if (default_slot) default_slot.c();
      (0, _internal.attr)(rect, "width",
      /*size*/
      ctx[0]);
      (0, _internal.attr)(rect, "height",
      /*size*/
      ctx[0]);
      (0, _internal.attr)(rect, "fillrule", "evenodd");
      (0, _internal.attr)(rect, "style", rect_style_value =
      /*color*/
      ctx[1] ? "fill: " +
      /*color*/
      ctx[1] : "");
      (0, _internal.attr)(rect, "rx",
      /*borderRadius*/
      ctx[4]);
      (0, _internal.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.attr)(svg, "width",
      /*size*/
      ctx[0]);
      (0, _internal.attr)(svg, "height",
      /*size*/
      ctx[0]);
      (0, _internal.attr)(svg, "viewBox", svg_viewBox_value = "0 0 " +
      /*size*/
      ctx[0] + " " +
      /*size*/
      ctx[0]);
      (0, _internal.attr)(svg, "preserveAspectRatio", "none");
      (0, _internal.set_attributes)(span, span_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, span, anchor);
      (0, _internal.append)(span, svg);
      (0, _internal.append)(svg, rect);
      if (if_block) if_block.m(svg, null);
      (0, _internal.append)(span, t);

      if (default_slot) {
        default_slot.m(span, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var dirty = _ref[0];

      if (!current || dirty &
      /*size*/
      1) {
        (0, _internal.attr)(rect, "width",
        /*size*/
        ctx[0]);
      }

      if (!current || dirty &
      /*size*/
      1) {
        (0, _internal.attr)(rect, "height",
        /*size*/
        ctx[0]);
      }

      if (!current || dirty &
      /*color*/
      2 && rect_style_value !== (rect_style_value =
      /*color*/
      ctx[1] ? "fill: " +
      /*color*/
      ctx[1] : "")) {
        (0, _internal.attr)(rect, "style", rect_style_value);
      }

      if (!current || dirty &
      /*borderRadius*/
      16) {
        (0, _internal.attr)(rect, "rx",
        /*borderRadius*/
        ctx[4]);
      }

      if (
      /*showIcon*/
      ctx[3]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(svg, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*size*/
      1) {
        (0, _internal.attr)(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (!current || dirty &
      /*size*/
      1) {
        (0, _internal.attr)(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (!current || dirty &
      /*size*/
      1 && svg_viewBox_value !== (svg_viewBox_value = "0 0 " +
      /*size*/
      ctx[0] + " " +
      /*size*/
      ctx[0])) {
        (0, _internal.attr)(svg, "viewBox", svg_viewBox_value);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2048) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[11], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[11], dirty, null));
        }
      }

      (0, _internal.set_attributes)(span, (0, _internal.get_spread_update)(span_levels, [dirty &
      /*rest*/
      32 &&
      /*rest*/
      ctx[5], dirty &
      /*skeletonClassName*/
      64 && {
        "class":
        /*skeletonClassName*/
        ctx[6]
      }]));
    },
    i: function i(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0, _internal.detach)(span);
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$size = _$$props.size,
      size = _$$props$size === void 0 ? 48 : _$$props$size;
  var _$$props2 = $$props,
      _$$props2$color = _$$props2.color,
      color = _$$props2$color === void 0 ? undefined : _$$props2$color;
  var _$$props3 = $$props,
      _$$props3$iconColor = _$$props3.iconColor,
      iconColor = _$$props3$iconColor === void 0 ? undefined : _$$props3$iconColor;
  var _$$props4 = $$props,
      _$$props4$showIcon = _$$props4.showIcon,
      showIcon = _$$props4$showIcon === void 0 ? true : _$$props4$showIcon;
  var _$$props5 = $$props,
      _$$props5$borderRadiu = _$$props5.borderRadius,
      borderRadius = _$$props5$borderRadiu === void 0 ? "50%" : _$$props5$borderRadiu;
  var _$$props6 = $$props,
      _$$props6$effect = _$$props6.effect,
      effect = _$$props6$effect === void 0 ? undefined : _$$props6$effect;
  var _$$props7 = $$props,
      _$$props7$class = _$$props7["class"],
      className = _$$props7$class === void 0 ? undefined : _$$props7$class;
  var rest = {};

  function multiplyPoints(pointsString) {
    return (0, _multiplySvgPoints["default"])(pointsString, 56, size, size);
  }

  var _$$props8 = $$props,
      _$$props8$$$slots = _$$props8.$$slots,
      $$slots = _$$props8$$$slots === void 0 ? {} : _$$props8$$$slots,
      $$scope = _$$props8.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(10, $$props = (0, _internal.assign)((0, _internal.assign)({}, $$props), (0, _internal.exclude_internal_props)($$new_props)));
    if ("size" in $$new_props) $$invalidate(0, size = $$new_props.size);
    if ("color" in $$new_props) $$invalidate(1, color = $$new_props.color);
    if ("iconColor" in $$new_props) $$invalidate(2, iconColor = $$new_props.iconColor);
    if ("showIcon" in $$new_props) $$invalidate(3, showIcon = $$new_props.showIcon);
    if ("borderRadius" in $$new_props) $$invalidate(4, borderRadius = $$new_props.borderRadius);
    if ("effect" in $$new_props) $$invalidate(8, effect = $$new_props.effect);
    if ("class" in $$new_props) $$invalidate(9, className = $$new_props["class"]);
    if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
  };

  var skeletonClassName;

  $$self.$$.update = function () {
    $: Object.keys($$props).forEach(function (prop) {
      if (prop !== "size" && prop !== "color" && prop !== "iconColor" && prop !== "showIcon" && prop !== "effect" && prop !== "borderRadius" && prop !== "class") {
        $$invalidate(5, rest[prop] = $$props[prop], rest);
      }
    });

    if ($$self.$$.dirty &
    /*effect, className*/
    768) {
      $: $$invalidate(6, skeletonClassName = ["skeleton-avatar", effect && "skeleton-effect-" + effect, className].filter(function (c) {
        return !!c;
      }).join(" "));
    }
  };

  $$props = (0, _internal.exclude_internal_props)($$props);
  return [size, color, iconColor, showIcon, borderRadius, rest, skeletonClassName, multiplyPoints, effect, className, $$props, $$scope, $$slots];
}

var SkeletonAvatar = /*#__PURE__*/function (_SvelteComponent) {
  _inheritsLoose(SkeletonAvatar, _SvelteComponent);

  function SkeletonAvatar(options) {
    var _this;

    _this = _SvelteComponent.call(this) || this;
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      size: 0,
      color: 1,
      iconColor: 2,
      showIcon: 3,
      borderRadius: 4,
      effect: 8,
      "class": 9
    });
    return _this;
  }

  return SkeletonAvatar;
}(_internal.SvelteComponent);

var _default = SkeletonAvatar;
exports["default"] = _default;