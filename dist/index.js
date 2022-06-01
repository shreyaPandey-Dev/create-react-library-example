var React = require('react');
require('bootstrap/dist/css/bootstrap.min.css');
var reactBootstrap = require('react-bootstrap');

function updateCBs(checkboxId) {
  console.log(checkboxId);
}

function CookieText() {
  return React.createElement("span", null, "Strictly required");
}

function CookieSwitch(props) {
  return React.createElement("label", {
    className: 'switch',
    style: {
      textAlign: 'right'
    }
  }, React.createElement("input", {
    type: 'checkbox',
    name: 'cookies[]',
    value: props.index
  }), React.createElement("span", {
    className: 'slider round',
    onClick: function onClick() {
      return updateCBs(props.checkboxId);
    }
  }));
}

function CookieSwitchOrText(props) {
  var strict = props.strict;

  if (strict) {
    return React.createElement(CookieText, null);
  }

  return React.createElement(CookieSwitch, {
    index: props.index,
    checkboxId: props.checkboxId
  });
}

var CookieCheckbox = function CookieCheckbox(_ref) {
  var accordionData = _ref.accordionData;
  return React.createElement("div", null, React.createElement(reactBootstrap.Accordion, {
    defaultActiveKey: '0'
  }, accordionData.sectionsData.map(function (element, index) {
    return React.createElement(reactBootstrap.Accordion.Item, {
      eventKey: index,
      key: index
    }, React.createElement(reactBootstrap.Accordion.Header, null, React.createElement("p", {
      className: 'sectionTitle'
    }, element.title), React.createElement(CookieSwitchOrText, {
      strict: element.strict,
      index: index,
      checkboxId: element.checkboxId
    })), React.createElement(reactBootstrap.Accordion.Body, null, element.content));
  })));
};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", null, React.createElement(CookieCheckbox, {
    accordionData: {
      title: 'Manage consent preferences',
      sectionsData: [{
        title: 'Strictly Necessary Cookies',
        content: "These cookies are necessary for the website to function and cannot be switched\n          off in our systems. They are usually only set in response to actions made by you which \n          amount to a request for services, such as setting your privacy preferences, logging in or \n          filling in forms. You can set your browser to block or alert you about these cookies, \n          but some parts of the site will not then work.",
        strict: false,
        checkboxId: ''
      }, {
        title: 'Functional Cookies',
        content: "These cookies enable the website to provide enhanced functionality and personalisation.\n          They may be set by us or by third party providers whose services we have added to our pages.\n          If you do not allow these cookies then some or all of these services may not function properly.",
        strict: true,
        checkboxId: 'functional'
      }, {
        title: 'Performance Cookies',
        content: "These cookies allow us to count visits and traffic sources so we can measure and \n          improve the performance of our site. They help us to know which pages are the most and least \n          popular and see how visitors move around the site. All information these cookies collect is \n          aggregated and therefore anonymous. If you do not allow these cookies we will not know when \n          you have visited our site, and will not be able to monitor its performance.",
        strict: false,
        checkboxId: 'performance'
      }, {
        title: 'Targeting Cookies',
        content: "These cookies may be set through our site by our advertising partners. They may be \n          used by those companies to build a profile of your interests and show you relevant adverts on \n          other sites. They do not store directly personal information, but are based on uniquely \n          identifying your browser and internet device. If you do not allow these cookies, you will \n          experience less targeted advertising.",
        strict: false,
        checkboxId: 'targeting'
      }]
    }
  }));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
