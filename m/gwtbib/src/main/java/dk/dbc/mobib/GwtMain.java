package dk.dbc.mobib;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.BodyElement;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.Style.Visibility;
import com.google.gwt.user.client.Window;

public class GwtMain implements EntryPoint {

	Element prev;
	Element current;
	static final BodyElement body = Document.get().getBody();
	private void transitionTo(String current, String transitionType) {
		this.transitionTo(Document.get().getElementById(current), transitionType);
	}
	private void transitionTo(Element current, String transitionType) {
		Window.scrollTo(0, 1);	
		if(prev != null) {
			prev.getStyle().setVisibility(Visibility.HIDDEN);
		}
		prev = current;
		this.current = current;
		if(prev != null) {
			body.insertBefore(prev, body.getFirstChild());
		}
		body.insertBefore(current, body.getFirstChild());


	}

	public void onModuleLoad() {
		Element	div = Document.get().createDivElement();
		div.setInnerText("Hello from mobile bibliotek.dk app skeleton.");
		Document.get().getBody().appendChild(div);
		this.transitionTo("searchresultpage", "");
	}
}
