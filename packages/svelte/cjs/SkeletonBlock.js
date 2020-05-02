"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _internal = require("svelte/internal");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function create_else_block(ctx) {
  var span;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var span_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = (0, _internal.assign)(span_data, span_levels[i]);
  }

  return {
    c: function c() {
      span = (0, _internal.element)("span");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(span, span_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, span, anchor);

      if (default_slot) {
        default_slot.m(span, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(span, (0, _internal.get_spread_update)(span_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (13:23) 


function create_if_block_6(ctx) {
  var h5;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var h5_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var h5_data = {};

  for (var i = 0; i < h5_levels.length; i += 1) {
    h5_data = (0, _internal.assign)(h5_data, h5_levels[i]);
  }

  return {
    c: function c() {
      h5 = (0, _internal.element)("h5");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(h5, h5_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, h5, anchor);

      if (default_slot) {
        default_slot.m(h5, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(h5, (0, _internal.get_spread_update)(h5_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(h5);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (11:23) 


function create_if_block_5(ctx) {
  var h4;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var h4_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var h4_data = {};

  for (var i = 0; i < h4_levels.length; i += 1) {
    h4_data = (0, _internal.assign)(h4_data, h4_levels[i]);
  }

  return {
    c: function c() {
      h4 = (0, _internal.element)("h4");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(h4, h4_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, h4, anchor);

      if (default_slot) {
        default_slot.m(h4, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(h4, (0, _internal.get_spread_update)(h4_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(h4);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (9:23) 


function create_if_block_4(ctx) {
  var h3;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var h3_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var h3_data = {};

  for (var i = 0; i < h3_levels.length; i += 1) {
    h3_data = (0, _internal.assign)(h3_data, h3_levels[i]);
  }

  return {
    c: function c() {
      h3 = (0, _internal.element)("h3");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(h3, h3_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, h3, anchor);

      if (default_slot) {
        default_slot.m(h3, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(h3, (0, _internal.get_spread_update)(h3_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(h3);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (7:23) 


function create_if_block_3(ctx) {
  var h2;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var h2_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var h2_data = {};

  for (var i = 0; i < h2_levels.length; i += 1) {
    h2_data = (0, _internal.assign)(h2_data, h2_levels[i]);
  }

  return {
    c: function c() {
      h2 = (0, _internal.element)("h2");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(h2, h2_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, h2, anchor);

      if (default_slot) {
        default_slot.m(h2, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(h2, (0, _internal.get_spread_update)(h2_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(h2);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (5:23) 


function create_if_block_2(ctx) {
  var h1;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var h1_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var h1_data = {};

  for (var i = 0; i < h1_levels.length; i += 1) {
    h1_data = (0, _internal.assign)(h1_data, h1_levels[i]);
  }

  return {
    c: function c() {
      h1 = (0, _internal.element)("h1");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(h1, h1_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, h1, anchor);

      if (default_slot) {
        default_slot.m(h1, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(h1, (0, _internal.get_spread_update)(h1_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(h1);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (3:22) 


function create_if_block_1(ctx) {
  var _p;

  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var p_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var p_data = {};

  for (var i = 0; i < p_levels.length; i += 1) {
    p_data = (0, _internal.assign)(p_data, p_levels[i]);
  }

  return {
    c: function c() {
      _p = (0, _internal.element)("p");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(_p, p_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, _p, anchor);

      if (default_slot) {
        default_slot.m(_p, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(_p, (0, _internal.get_spread_update)(p_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(_p);
      if (default_slot) default_slot.d(detaching);
    }
  };
} // (1:0) {#if tag === 'div'}


function create_if_block(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11]["default"];
  var default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var div_levels = [
  /*rest*/
  ctx[1], {
    style:
    /*skeletonStyle*/
    ctx[2]
  }, {
    "class":
    /*skeletonClassName*/
    ctx[3]
  }];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = (0, _internal.assign)(div_data, div_levels[i]);
  }

  return {
    c: function c() {
      div = (0, _internal.element)("div");
      if (default_slot) default_slot.c();
      (0, _internal.set_attributes)(div, div_data);
    },
    m: function m(target, anchor) {
      (0, _internal.insert)(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          default_slot.p((0, _internal.get_slot_context)(default_slot_template, ctx,
          /*$$scope*/
          ctx[10], null), (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null));
        }
      }

      (0, _internal.set_attributes)(div, (0, _internal.get_spread_update)(div_levels, [dirty &
      /*rest*/
      2 &&
      /*rest*/
      ctx[1], dirty &
      /*skeletonStyle*/
      4 && {
        style:
        /*skeletonStyle*/
        ctx[2]
      }, dirty &
      /*skeletonClassName*/
      8 && {
        "class":
        /*skeletonClassName*/
        ctx[3]
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
      if (detaching) (0, _internal.detach)(div);
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function create_fragment(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_if_block_3, create_if_block_4, create_if_block_5, create_if_block_6, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*tag*/
    ctx[0] === "div") return 0;
    if (
    /*tag*/
    ctx[0] === "p") return 1;
    if (
    /*tag*/
    ctx[0] === "h1") return 2;
    if (
    /*tag*/
    ctx[0] === "h2") return 3;
    if (
    /*tag*/
    ctx[0] === "h3") return 4;
    if (
    /*tag*/
    ctx[0] === "h4") return 5;
    if (
    /*tag*/
    ctx[0] === "h5") return 6;
    return 7;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0, _internal.insert)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var dirty = _ref[0];
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0, _internal.detach)(if_block_anchor);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$width = _$$props.width,
      width = _$$props$width === void 0 ? undefined : _$$props$width;
  var _$$props2 = $$props,
      _$$props2$height = _$$props2.height,
      height = _$$props2$height === void 0 ? undefined : _$$props2$height;
  var _$$props3 = $$props,
      _$$props3$tag = _$$props3.tag,
      tag = _$$props3$tag === void 0 ? "div" : _$$props3$tag;
  var _$$props4 = $$props,
      _$$props4$effect = _$$props4.effect,
      effect = _$$props4$effect === void 0 ? undefined : _$$props4$effect;
  var _$$props5 = $$props,
      _$$props5$style = _$$props5.style,
      style = _$$props5$style === void 0 ? undefined : _$$props5$style;
  var _$$props6 = $$props,
      _$$props6$class = _$$props6["class"],
      className = _$$props6$class === void 0 ? undefined : _$$props6$class;
  var rest = {};
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(9, $$props = (0, _internal.assign)((0, _internal.assign)({}, $$props), (0, _internal.exclude_internal_props)($$new_props)));
    if ("width" in $$new_props) $$invalidate(4, width = $$new_props.width);
    if ("height" in $$new_props) $$invalidate(5, height = $$new_props.height);
    if ("tag" in $$new_props) $$invalidate(0, tag = $$new_props.tag);
    if ("effect" in $$new_props) $$invalidate(6, effect = $$new_props.effect);
    if ("style" in $$new_props) $$invalidate(7, style = $$new_props.style);
    if ("class" in $$new_props) $$invalidate(8, className = $$new_props["class"]);
    if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
  };

  var skeletonStyle;
  var skeletonClassName;

  $$self.$$.update = function () {
    $: Object.keys($$props).forEach(function (prop) {
      if (prop !== "width" && prop !== "height" && prop !== "tag" && prop !== "effect" && prop !== "style" && prop !== "class") {
        $$invalidate(1, rest[prop] = $$props[prop], rest);
      }
    });

    if ($$self.$$.dirty &
    /*style*/
    128) {
      $: $$invalidate(2, skeletonStyle = style || "");
    }

    if ($$self.$$.dirty &
    /*width, skeletonStyle*/
    20) {
      $: if (width) $$invalidate(2, skeletonStyle += ";width: " + width);
    }

    if ($$self.$$.dirty &
    /*height, skeletonStyle*/
    36) {
      $: if (height) $$invalidate(2, skeletonStyle += ";height: " + height);
    }

    if ($$self.$$.dirty &
    /*effect, className*/
    320) {
      $: $$invalidate(3, skeletonClassName = ["skeleton-block", effect && "skeleton-effect-" + effect, className].filter(function (c) {
        return !!c;
      }).join(" "));
    }
  };

  $$props = (0, _internal.exclude_internal_props)($$props);
  return [tag, rest, skeletonStyle, skeletonClassName, width, height, effect, style, className, $$props, $$scope, $$slots];
}

var SkeletonBlock = /*#__PURE__*/function (_SvelteComponent) {
  _inheritsLoose(SkeletonBlock, _SvelteComponent);

  function SkeletonBlock(options) {
    var _this;

    _this = _SvelteComponent.call(this) || this;
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      width: 4,
      height: 5,
      tag: 0,
      effect: 6,
      style: 7,
      "class": 8
    });
    return _this;
  }

  return SkeletonBlock;
}(_internal.SvelteComponent);

var _default = SkeletonBlock;
exports["default"] = _default;