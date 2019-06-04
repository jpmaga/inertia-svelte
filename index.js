(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('inertia'), require('svelte/internal'), require('svelte'), require('svelte/store')) :
  typeof define === 'function' && define.amd ? define(['exports', 'inertia', 'svelte/internal', 'svelte', 'svelte/store'], factory) :
  (global = global || self, factory(global.InertiaSvelte = {}, global.Inertia, global.internal, global.svelte, global.store));
}(this, function (exports, Inertia, internal, svelte, store) { 'use strict';

  var Inertia__default = 'default' in Inertia ? Inertia['default'] : Inertia;

  /* src/App.svelte generated by Svelte v3.4.4 */

  function create_fragment(ctx) {
  	var switch_instance_anchor, current;

  	var switch_instance_spread_levels = [
  		ctx.$page.props
  	];

  	var switch_value = ctx.$page.component;

  	function switch_props(ctx) {
  		let switch_instance_props = {};
  		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}
  		return { props: switch_instance_props };
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  	}

  	return {
  		c() {
  			if (switch_instance) switch_instance.$$.fragment.c();
  			switch_instance_anchor = internal.empty();
  		},

  		m(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert(target, switch_instance_anchor, anchor);
  			current = true;
  		},

  		p(changed, ctx) {
  			var switch_instance_changes = changed.$page ? internal.get_spread_update(switch_instance_spread_levels, [
  				ctx.$page.props
  			]) : {};

  			if (switch_value !== (switch_value = ctx.$page.component)) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;
  					internal.on_outro(() => {
  						old_component.$destroy();
  					});
  					old_component.$$.fragment.o(1);
  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));

  					switch_instance.$$.fragment.c();
  					switch_instance.$$.fragment.i(1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			}

  			else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},

  		i(local) {
  			if (current) return;
  			if (switch_instance) switch_instance.$$.fragment.i(local);

  			current = true;
  		},

  		o(local) {
  			if (switch_instance) switch_instance.$$.fragment.o(local);
  			current = false;
  		},

  		d(detaching) {
  			if (detaching) {
  				internal.detach(switch_instance_anchor);
  			}

  			if (switch_instance) switch_instance.$destroy(detaching);
  		}
  	};
  }

  function instance($$self, $$props, $$invalidate) {
  	let $page;

  	internal.subscribe($$self, page, $$value => { $page = $$value; $$invalidate('$page', $page); });

  	let { initialPage, resolveComponent, transformProps = i => i } = $$props;

    Inertia__default.init({
      initialPage,
      resolveComponent,
      updatePage: (component, props, { preserveState }) => {
        page.set({ component, props: transformProps(props) });
      },
    });

  	$$self.$set = $$props => {
  		if ('initialPage' in $$props) $$invalidate('initialPage', initialPage = $$props.initialPage);
  		if ('resolveComponent' in $$props) $$invalidate('resolveComponent', resolveComponent = $$props.resolveComponent);
  		if ('transformProps' in $$props) $$invalidate('transformProps', transformProps = $$props.transformProps);
  	};

  	return {
  		initialPage,
  		resolveComponent,
  		transformProps,
  		$page
  	};
  }

  class App extends internal.SvelteComponent {
  	constructor(options) {
  		super();
  		internal.init(this, options, instance, create_fragment, internal.safe_not_equal, ["initialPage", "resolveComponent", "transformProps"]);
  	}
  }

  /* src/Link.svelte generated by Svelte v3.4.4 */

  function create_fragment$1(ctx) {
  	var a, current, dispose;

  	const default_slot_1 = ctx.$$slots.default;
  	const default_slot = internal.create_slot(default_slot_1, ctx, null);

  	return {
  		c() {
  			a = internal.element("a");

  			if (default_slot) default_slot.c();

  			a.href = ctx.href;
  			dispose = internal.listen(a, "click", ctx.visit);
  		},

  		l(nodes) {
  			if (default_slot) default_slot.l(a_nodes);
  		},

  		m(target, anchor) {
  			internal.insert(target, a, anchor);

  			if (default_slot) {
  				default_slot.m(a, null);
  			}

  			current = true;
  		},

  		p(changed, ctx) {
  			if (default_slot && default_slot.p && changed.$$scope) {
  				default_slot.p(internal.get_slot_changes(default_slot_1, ctx, changed, null), internal.get_slot_context(default_slot_1, ctx, null));
  			}

  			if (!current || changed.href) {
  				a.href = ctx.href;
  			}
  		},

  		i(local) {
  			if (current) return;
  			if (default_slot && default_slot.i) default_slot.i(local);
  			current = true;
  		},

  		o(local) {
  			if (default_slot && default_slot.o) default_slot.o(local);
  			current = false;
  		},

  		d(detaching) {
  			if (detaching) {
  				internal.detach(a);
  			}

  			if (default_slot) default_slot.d(detaching);
  			dispose();
  		}
  	};
  }

  function instance$1($$self, $$props, $$invalidate) {
  	

    const dispatch = svelte.createEventDispatcher();

    let { href, data = {}, method = 'get', replace = false, preserveScroll = false, preserveState = false } = $$props;

    function visit(event) {
      dispatch('click', event);

      if (Inertia.shouldIntercept(event)) {
        event.preventDefault();

        Inertia__default.visit(href, {
          data,
          method,
          preserveScroll,
          preserveState,
          replace,
        });
      }
    }

  	let { $$slots = {}, $$scope } = $$props;

  	$$self.$set = $$props => {
  		if ('href' in $$props) $$invalidate('href', href = $$props.href);
  		if ('data' in $$props) $$invalidate('data', data = $$props.data);
  		if ('method' in $$props) $$invalidate('method', method = $$props.method);
  		if ('replace' in $$props) $$invalidate('replace', replace = $$props.replace);
  		if ('preserveScroll' in $$props) $$invalidate('preserveScroll', preserveScroll = $$props.preserveScroll);
  		if ('preserveState' in $$props) $$invalidate('preserveState', preserveState = $$props.preserveState);
  		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
  	};

  	return {
  		href,
  		data,
  		method,
  		replace,
  		preserveScroll,
  		preserveState,
  		visit,
  		$$slots,
  		$$scope
  	};
  }

  class Link extends internal.SvelteComponent {
  	constructor(options) {
  		super();
  		internal.init(this, options, instance$1, create_fragment$1, internal.safe_not_equal, ["href", "data", "method", "replace", "preserveScroll", "preserveState"]);
  	}
  }

  const page = store.writable({
    component: null,
    props: {},
  });

  const pageProps = store.derived(page, $page => $page.props);

  function rememberedState(initialState, key) {
      const restored = Inertia__default.restore(key);
      const store$1 = store.writable(restored || initialState);

      const unsubscribe = store$1.subscribe(state => Inertia__default.remember(state, key));

      svelte.onDestroy(() => {
          unsubscribe();
      });

      return store$1
  }

  exports.Inertia = Inertia__default;
  exports.InertiaLink = Link;
  exports.default = App;
  exports.page = page;
  exports.pageProps = pageProps;
  exports.rememberedState = rememberedState;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
